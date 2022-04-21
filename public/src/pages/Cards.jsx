import * as React from 'react';
import { useEffect } from 'react';
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import img0 from "../assets/img/PC_image0.png"
import img1 from "../assets/img/PC_image1.png"
import img2 from "../assets/img/PC_image2.png"
import img3 from "../assets/img/PC_image3.png"

export default function Cards() {




  const [cookies, setCookie, removeCookie] = useCookies([]);
  useEffect(() => {
    // const verifyUser = async () => {
    //   if (!cookies.jwt) {
    //     navigate("/login");
    //   } else {
    //     const { data } = await axios.post(
    //       "http://localhost:4000",
    //       {},
    //       {
    //         withCredentials: true,
    //       }
    //     );

    //   }
    // };
    // verifyUser();
  }, [cookies, removeCookie]);


  return (
  <>
      <h2>Gallery</h2>
      <div className="private">

        
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  width="200"
                  image={img1}
                  alt="image 1"
                />
                {/* <img src={img0}/> */}
                <CardContent>

                </CardContent>
              </CardActionArea>
              <CardActions>

              </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  width="200"
                  image={img2}
                  alt="image 1"
                />
                {/* <img src={img0}/> */}
                <CardContent>

                </CardContent>
              </CardActionArea>
              <CardActions>

              </CardActions>
            </Card>
         

          
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    width="200"
                    image={img3}
                    alt="image 1"
                  />
                  {/* <img src={img0}/> */}
                  <CardContent>

                  </CardContent>
                </CardActionArea>
                <CardActions>

                </CardActions>
              </Card>
            
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    width="200"
                    image={img0}
                    alt="image 1"
                  />
                  {/* <img src={img0}/> */}
                  <CardContent>

                  </CardContent>
                </CardActionArea>
                <CardActions>

                </CardActions>
              </Card>
           


        </div>
        <ToastContainer />
      </>
      );
}
