<template>
    <div class="social-media-container box">
        <h3>Social Media Stauts</h3>
        <div class="social-media-box">
            <div class="media twitter">
                <div class="social-media-icon">
                    <i class="fa-brands fa-twitter fa-lg"></i>
                </div>
                <div class="social-media-content-container">
                    <p>90k Followers</p>
                    <div class="badge">follow</div>
                </div>
            </div>
            <!-- facebook -->
            <div class="media facebook">
                <div class="social-media-icon">
                    <i class="fa-brands fa-facebook-f"></i>
                </div>
                <div class="social-media-content-container">
                    <p>2M Like</p>
                    <div class="badge">Like</div>
                </div>
            </div>
            <!-- youtube -->
            <div class="media youtube">
                <div class="social-media-icon">
                    <i class="fa-brands fa-youtube"></i>
                </div>
                <div class="social-media-content-container">
                    <p>1M Subs</p>
                    <div class="badge">Subscribe</div>
                </div>
            </div>
            <!-- linkedin -->
            <div class="media linkedin">
                <div class="social-media-icon">
                    <i class="fa-brands fa-linkedin"></i>
                </div>
                <div class="social-media-content-container">
                    <p>70K Followers</p>
                    <div class="badge">Follow</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name :"SocialMediaStatus"
}
</script>
<style scoped>
h3 , p{
    padding: 0;
    margin: 0;
}
.social-media-container{
    background-color: white;
    min-height: 300px;
    padding: 15px;
}
.social-media-container h3{
    margin-bottom: 15px;
}
.social-media-box{
    display: flex;
    flex-direction: column;
}
.social-media-box .media{
    display: flex;
    width: 100%;
}
.social-media-box .media:not(:last-child){
    margin-bottom: 10px;
}
.social-media-box .media .social-media-icon{
    width: 50px;
    height : 50px ;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
}
.social-media-box .media.twitter .social-media-icon{
    background-color: #1DA1F2;
}
.social-media-box .media.facebook .social-media-icon{
    background-color: #1877F2;
}
.social-media-box .media.youtube .social-media-icon{
    background-color: #CD201F;
}
.social-media-box .media.linkedin .social-media-icon{
    background-color: #0A66C2;
}
.social-media-content-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    width: calc(100% - 50px);
}
.social-media-box .media.twitter .social-media-content-container{
    background-color: #3498db42;
}
.social-media-box .media.facebook .social-media-content-container{
    background-color: #1877f252;
}
.social-media-box .media.youtube .social-media-content-container{
    background-color: #cd201f5e;
}
.social-media-box .media.linkedin .social-media-content-container{
    background-color: #0a66c254;
}
.social-media-content-container p{
    font-size: 13px;
    font-weight: bold;
}
.social-media-box .media.twitter .social-media-content-container p{
    color: #1DA1F2;
}
.social-media-box .media.facebook .social-media-content-container p{
    color: #1877F2;
}
.social-media-box .media.youtube .social-media-content-container p{
    color: #CD201F;
}
.social-media-box .media.linkedin .social-media-content-container p{
    color: #0A66C2;
}
.social-media-content-container .badge{
    padding: 5px;
    font-size: 13px;
    color: white;
    text-transform: capitalize;
    border-radius: 6px;
}
.social-media-box .media.twitter .social-media-content-container .badge{
    background-color: #1DA1F2;
}
.social-media-box .media.facebook .social-media-content-container .badge{
    background-color: #1877F2;
}
.social-media-box .media.youtube .social-media-content-container .badge{
    background-color: #CD201F;
}
.social-media-box .media.linkedin .social-media-content-container .badge{
    background-color: #0A66C2;
}
</style>