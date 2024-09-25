import { uploadImageToCloudinary } from "@/utils/imageUploader";
import { cloudinaryConnect } from "@/utils/cloudinary";
import mailSender from "@/utils/mailSender";
import { mailTemplate } from "@/utils/mailtemplate";

cloudinaryConnect();
export async function POST(request) {
  try {
    const reqBody = await request.formData();
    const companyName = reqBody.get("companyName");
    const email = reqBody.get("email");
    const logo = reqBody.get("logo");
    const industry = reqBody.get("industry");
    const consultationFocus = reqBody.get("consultationFocus");
    const companyStage = reqBody.get("companyStage");
    const partnershipFocus = reqBody.get("partnershipFocus");
    const timeFrameForResult = reqBody.get("timeFrameForResult");
    const consultationLength = reqBody.get("consultationLength");
    const followUpSupport = reqBody.get("followUpSupport");
    const additionalInformation = reqBody.get("additionalInformation");
    const marketCap = reqBody.get("marketCap");

    let logoImg;
    if (logo && logo instanceof File && logo.size > 0) { 
      const screenshotBuffer = await logo?.arrayBuffer();
      const mime = logo.type;
      const encoding = "base64";
      const base64Data = Buffer.from(screenshotBuffer).toString("base64");
      const fileUrl = "data:" + mime + ";" + encoding + "," + base64Data;

      logoImg = await uploadImageToCloudinary(fileUrl, "GemBizz");
    }

    const data = {
      companyName,
      email,
      logo: logoImg?.secure_url,
      industry,
      consultationFocus,
      consultationLength,
      followUpSupport,
      additionalInformation,
      timeFrameForResult,
      companyStage,
      marketCap,
      partnershipFocus,
    };

    await mailSender(
      email,
      "Response of your Consultation Request",
      mailTemplate(data)
    );

    return Response.json({
      message: "Success",
    });
  } catch (error) {
    console.log(error);
  }
}
