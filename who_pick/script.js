const daysInThisMonth = () => {
    const currentDate = new Date();
    const dayOfMonth = currentDate.getDate();
    const imageContainer = document.querySelector('.img_container');
    const bImg = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmx3MHkxbGE1d3F2YzF4cnEzajloaHA1czdmNnV0c2cxeGU0MjI3YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/WpUAzaI9jfs01WFQb7/giphy.gif";
    const gImg = "https://media3.giphy.com/media/l6oLkIMPMyHU9ER6TB/giphy.gif?cid=ecf05e47k6r3tl5obbnzuetp9qemi7tfok4zqseuu4cj18sk&ep=v1_stickers_search&rid=giphy.gif&ct=s";
    
    if (dayOfMonth % 2 !== 0) {
    	imageContainer.src = bImg;
      return 'Rares se uita la desene si Rares se spala primul.';
    } else {
      imageContainer.src = gImg;
      return 'Olivia se uita la desene si Olivia se spala prima.';
    }
}