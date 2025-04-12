
const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
const cloud_name = import.meta.env.VITE_CLOUD_NAME;

const uploadImageCloudinary = async (file) => {
    const uploadDate = new FormData();

    uploadDate.append("file", file);
    uploadDate.append("upload_preset", upload_preset);
    console.log(upload_preset, cloud_name)

  
    const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, 
        {
            method: "post",
            body: uploadDate,
        }
    );

    const data = await res.json();

    return data;
};

export default uploadImageCloudinary;
