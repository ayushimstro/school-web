import React from "react";
import Header from "../../components/Common/Header";
import Footer from "../../components/Common/Footer";

export default function NewsDetail() {
  return (
    <>
      <Header />
      <div className="bgImage"></div>

      <div className="newssection">
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
             
                  <div className="">
                    <img src="https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?cs=srgb&dl=pexels-andrew-neel-2312369.jpg&fm=jpg" />
                    <h4 className="mt-2">Featured - 18 Jul 2022</h4>
                    <p>
                    Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge. cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Suspendisse interdum consectetur libero id faucibu nisl. Lacus vel facilisis volutpat est velit egestas.

Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Sit amet ris nullam eget felis. Enim praesent elementum facilisis leo. Ultricies leo integer.
                    </p>
               
              </div>
            </div>
         
            <div className="col-sm-3">
              <div className="category">
                <h4 className="mb-3">Category</h4>
                <ul>
                  <li>Digital (3)</li>
                  <li>Marketing (10)</li>
                  <li>Digital (3)</li>
                  <li>Marketing (10)</li> <li>Digital (3)</li>
                  <li>Marketing (10)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bgRed">
  
          <div className="container list-page">
          <div className="row">
            <div className="col-sm-9">
             
                  <div className="">
                    <img style={{width:"100%"}} src="data:image/jpeg;base64,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" / >
                    <h4 className="mt-4">This response is important for our ability to from mistakes but it alsogives rise to self-criticism.</h4>
                    <p>
                    One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in future The same is true as we experienc the emotional of stress from our instances. We are quickly learn to fear and thus automatically. Lorem ipsum dolor sit amet, consectetur adipis elit quis extraction labore.
                    </p>
                
              </div>
            </div>
       
          
          </div>
        </div>
        </div>
        <div className="work-section text-center m-5">
          <h3>Work Harder & Gain Succsess</h3>
          <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in quis elit future. The same Duis aute irure dolor in reprehenderit .</p>
          <p>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in quis elit future. The same Duis aute irure dolor in reprehenderit .</p>

        </div>
      </div>
      <Footer />
    </>
  );
}
