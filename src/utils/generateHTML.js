export const signUpTemp = (link) =>
    `<!DOCTYPE html>
  <html>
  
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <style type="text/css">
      body {
        background-color: white;
        margin: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
      }
  
      .container {
        background-color: antiquewhite;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        padding: 30px;
        max-width: 400px;
        width: 100%;
        text-align: center;
      }
  
      h1 {
        margin-top: 0;
      }
  
      img.logo {
        width: 100px;
      }
  
      p.view-website {
        text-align: right;
        margin: 0;
      }
  
      table {
        text-align: center;
        width: 100%;
        background-color: aliceblue;
      }
  
      .email-header {
        background-color: #630E2B;
        height: 100px;
        font-size: 50px;
        color: #fff;
      }
  
      .email-header img {
        width: 50px;
        height: 50px;
      }
  
      h1.email-title {
        padding-top: 25px;
        color: #630E2B;
      }
  
      a.verify-email-btn {
        margin: 10px 0px 30px 0px;
        border-radius: 4px;
        padding: 10px 20px;
        font-size: 20px;
  
        border: 0;
        color: #fff;
        background-color: #630E2B;
        text-decoration: none;
      }
  
      .social-icons {
        margin-top: 20px;
      }
  
      .social-icons img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        padding: 10px 9px;
        color: #fff;
      }
  
      h3.stay-in-touch {
        margin-top: 10px;
        color: #000;
      }
    </style>
  </head>
  
  <body>
    <div class="container">
      <table border="0" width="100%">
        <tr>
          <td>
            <h1>
              
            </h1>
          </td>
        </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td class="email-header">
            <img src="https://res.cloudinary.com/ddajommsw/image/upload/v1670703716/Screenshot_1100_yne3vo.png">
          </td>
        </tr>
        <tr>
          <td>
            <h1 class="email-title">Email Confirmation</h1>
          </td>
        </tr>
        <tr>
          <td>
            <p style="padding: 0px 100px;"></p>
          </td>
        </tr>
        <tr>
          <td>
            <a href="${link}" class="verify-email-btn">Verify Email Address</a>
          </td>
        </tr>
      </table>
      <table border="0" width="100%" style="border-radius: 5px; text-align: center;">
        <tr>
          <td>
            <h3 class="stay-in-touch">Stay in touch</h3>
          </td>
        </tr>
        <tr>
          <td>
            <div class="social-icons">
              <a href="https://www.facebook.com/moahamd.ibrahem/" target="_blank">
                <img src="https://img.freepik.com/free-icon/facebook_318-194827.jpg" alt="Facebook">
              </a>
              <a href="https://www.linkedin.com/in/mohamed-ibrahem-63446322a" target="_blank">
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="LinkedIn">
              </a>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </body>
  
  </html>
   
                  
  
                  
                  `;
  export const forgetCodeTemp = (code) =>
    `<!DOCTYPE html>
  <html>
  
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <style type="text/css">
      body {
        background-color: white;
        margin: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
      }
  
      .container {
        background-color: antiquewhite;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        padding: 30px;
        max-width: 400px;
        width: 100%;
        text-align: center;
      }
  
      h1 {
        margin-top: 0;
      }
  
      img.logo {
        width: 100px;
      }
  
      p.view-website {
        text-align: right;
        margin: 0;
      }
  
      table {
        text-align: center;
        width: 100%;
        background-color: aliceblue;
      }
  
      .email-header {
        background-color: #630E2B;
        height: 100px;
        font-size: 50px;
        color: #fff;
      }
  
      .email-header img {
        width: 50px;
        height: 50px;
      }
  
      h1.email-title {
        padding-top: 25px;
        color: #630E2B;
      }
  
      a.verify-email-btn {
        margin: 10px 0px 30px 0px;
        border-radius: 4px;
        padding: 10px 20px;
        font-size: 20px;
  
        border: 0;
        color: #fff;
        background-color: #630E2B;
        text-decoration: none;
      }
  
      .social-icons {
        margin-top: 20px;
      }
  
      .social-icons img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        padding: 10px 9px;
        color: #fff;
      }
  
      h3.stay-in-touch {
        margin-top: 10px;
        color: #000;
      }
    </style>
  </head>
  
  <body>
    <div class="container">
      <table border="0" width="100%">
        <tr>
          <td>
            <h1>
              
            </h1>
          </td>
        </tr>
      </table>
      <table border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td class="email-header">
            <img src="https://res.cloudinary.com/ddajommsw/image/upload/v1670703716/Screenshot_1100_yne3vo.png">
          </td>
        </tr>
        <tr>
          <td>
            <h1 class="email-title">Reset password</h1>
          </td>
        </tr>
        <tr>
          <td>
            <p style="padding: 0px 100px;"></p>
          </td>
        </tr>
        <tr>
          <td>
            <a  class="verify-email-btn">${code}</a>
          </td>
        </tr>
      </table>
      <table border="0" width="100%" style="border-radius: 5px; text-align: center;">
        <tr>
  
  
          <td>
            <h3 class="stay-in-touch">Copy the code</h3>
          </td>
        </tr>
        <tr>
          <td>
            <div class="social-icons">
              <a href="https://www.facebook.com/moahamd.ibrahem/" target="_blank">
                <img src="https://img.freepik.com/free-icon/facebook_318-194827.jpg" alt="Facebook">
              </a>
              <a href="https://www.linkedin.com/in/mohamed-ibrahem-63446322a" target="_blank">
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="LinkedIn">
              </a>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </body>
  
  </html>
   
                  
  
                  
                  `;
  