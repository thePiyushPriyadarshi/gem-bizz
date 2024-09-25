import { v2 as cloudinary } from "cloudinary"

export async function uploadImageToCloudinary(file, folder, height, quality) {
  const options = { folder }
  if (height) {
    options.height = height
  }
  if (quality) {
    options.quality = 50
  }
  options.resource_type = "auto"
//   options.quality = "eco"
  options.q_auto= "eco"

  return await cloudinary.uploader.upload(file, options)
}
