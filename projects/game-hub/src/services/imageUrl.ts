const getCroppedImageUrl =(imageUrl: string) => {
    const target= "media/";
    console.log(imageUrl);
    const index=imageUrl.indexOf(target) +target.length;
    return `${imageUrl.substring(0,index)}crop/600/400/${imageUrl.substring(index)}`;
}
export default getCroppedImageUrl;