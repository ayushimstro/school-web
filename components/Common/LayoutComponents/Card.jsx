import React, { useState } from "react";
import parser from "html-react-parser";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
export default function Card({ title, tag, description, Image, click }) {
  const [open, setOpen] = useState(false);
  const [video, setVideo] = useState("");
  const [selectedImage, setSelectedImage] = useState({});
  function getYoutubeVideoId(url) {
    var regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 11) {
      return match[2];
    } else {
      return "error";
    }
  }
  return (
    <div
      style={{ zIndex: -1 }}
      onClick={(e) => {

        if(click == true){
          e.stopPropagation();
          if (tag == "Video") {
            console.log(tag, "taggg");
            setOpen(true);
            setVideo(
              Image.includes("youtube")
                ? `https://www.youtube.com/embed/${getYoutubeVideoId(Image)}`
                : `${Image}`
            );
          } else {
            setOpen(true);
            setSelectedImage({ title: title, Image: Image });
          }
        }
        
      }}
    >
      <div class="card">
        <div class="card__header">
          {tag == "Video" ? (
            <iframe
              width="510"
              height="200"
              src={
                Image.includes("youtube")
                  ? `https://www.youtube.com/embed/${getYoutubeVideoId(Image)}`
                  : `${Image}`
              }
              frameborder="0"
              allowfullscreen
              className="card__image"
            ></iframe>
          ) : (
            <img
              src={
                Image ? Image : "https://source.unsplash.com/600x400/?computer"
              }
              alt="card__image"
              class="card__image"
              width="600"
            />
          )}{" "}
        </div>
        <div class="card__body">
          <span class="tag tag-blue">{tag?.toUpperCase()}</span>
          <h4>{title}</h4>
          {/* <p>{description}</p> */}
        </div>
      </div>
      <Modal
        open={open}
        onClose={(e) => {
          e.stopPropagation();
          setOpen(false);
        }}
        center
        styles={{
          modal: {
            borderRadius: 20,
          },
        }}
      >
        {tag == "Video" ? (
          <iframe
            width="610"
            height="400"
            src={video}
            frameborder="0"
            allowfullscreen
            className="card__image"
            style={{
              marginTop: 20,
              zIndex: -1,
            }}
          ></iframe>
        ) : (
          <>
            <img src={selectedImage.Image} alt={title} />
            <div>
              <p style={{ fontSize: 20 }}>{title}</p>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}
