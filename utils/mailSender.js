
import { createTransport } from 'nodemailer'; 
const mailSender = async(email,title,body) =>{ 
    try{

        let transporter = createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass : process.env.MAIL_PASS,
            }
        })

        let info = await transporter.sendMail({
            from : {
                name : "Gem Bizz",
                address : "studynotion11@gmail.com",
            },
            to : `${email}`,
            subject : `${title}`,
            html : `${body}`, 
        }); 
        return info;
    }catch(err){
        console.log(err.message);
    }
}

export default mailSender;