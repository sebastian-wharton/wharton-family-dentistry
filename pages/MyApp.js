import NavBar from "./Components/NavBar";

const MyApp = require() => {
    return ( 
        <main>
            {/* TODO General Layout, extract w/ glean */}
            <NavBar />
             {/* <div className="Navbar">
            //   <div className="logo"></div>

            //   {/* Add onClick={} event to sidebar, toggle view, change opacity for the rest of the page & have clicking on anywhere but the sidebar (or the X ofc) close the sidebar */}
            {/* //   <div className="rightnav">
            //     <div className="addressLink"></div>

            //     <div className="sideBar">
            //       <button></button>
            //     </div>
            //   </div>
             </div> */} */}
            {/* Add onClick={} event to button which routes to schedule appt page */}
            <div className="s1-container">
        <div className="homeadvert">
          <button></button>
        </div>
        <div className="smile-image"></div>
            </div>
            <div className="s2-container">
                <h2>Services</h2>
                    <div className="cardComponent">
                        <h3>Service</h3>
                        <img src="service1" class="img-fluid rounded-top" alt="">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam sequi mollitia necessitatibus soluta sed nulla natus molestias deleniti consequuntur repellat?
                            </p>     
                        <button>Learn More</button>
                    </div>
                    <button className="servicesHome">
                        Laern More About All Our Services
                    </button>
            </div>
            <div className="s3-container">
      <div className="quote-box">
                <h3 className="quote">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, dolorum
                </h3>
      </div>
            </div>
            <Footer className="components-footer">
        <div className="footerServices">
          <div>
          <h3>Office Hours</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          </div>
          <div>
            <h3>Our Services Include:</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>
          </div>
          <div>
          <h3>Contact Information</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            </ul>
          </div>
        </div>
        <p className="copyrightLink"><p></p><a href=""></a></p>
            </Footer>
        </main>
    );
}
export default MyApp;