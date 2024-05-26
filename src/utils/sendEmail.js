import nodemailer from "nodemailer";

export const sendEmail = async ({ to, subject, html }) => {

    //info sender
    const transporter = nodemailer.createTransport({
        // host: "localhost",
        // port: 456,
        //secure: true,
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
        },

    });
    //info receiver
    const info = await transporter.sendMail({

        from: process.env.EMAIL,// sender address
        to, // list of receivers
        subject, // Subject line
        html, // html body
    });

    if (info.accepted.length > 0) {
        return true;
    }

    return false;

}
// import nodemailer from "nodemailer";

// export const sendEmail = async ({ to, subject, html, text }) => {
//     // sender
//     const transporter = nodemailer.createTransport({
//         host: "localhost",
//         port: 456,
//         secure: true,
//         service: "gmail",
//         auth: {
//             user: process.env.EMAIL,
//             pass: process.env.PASS,
//         },
//     });

//     const info = await transporter.sendMail({
//         from: process.env.EMAIL,
//         to,
//         subject,
//         html,
//         text,
// });
//   //reciver
// };