<template lang="html">
	<div class="container card shadow">
	
		<div class="pt-4 m-3 mx-4 my-4" style=" background-color: ; border-radius: 5px; margin-top: 0 !important ;">
        <div class="d-flex justify-content-start">
       <div class="col-md-2 col-sm-2 col-xs-2" >
        <img 
                          :src="require('/src/assets/images/d-img.svg')"
                          alt="logo"
                          width="60"
                          height="20"
                          />
       </div>
             <div class="col-8 pt-4" >
              
                <div class="input-group" style="background-color: none !important; border-radius: 5px;">
              <div class="input-group-prepend">
                <span
                  type="button"
                  class="input-icon input-group-text bg-transparent border-0"
                  id="basic-addon1"
                >
                  <img
                    :src="require(`/src/assets/images/search_icon.png`)"
                    alt=""
                /></span>
              </div>
              <div class="col-10" >
               <div class="row">
				<div class="col-10 pt-2">
					<input
                type="text"
                name="search"
                class="form-control border-left-0 "
                placeholder="Hello budies"
              
               
              />
				</div>
				<div class="col-2" style="margin-bottom: 3px;">
					<button class="backgroundImage">Post</button>
				</div>
			   </div>
              </div>
                </div>
              </div>
        
      </div>
        </div>
		
		<div class="content">
        <!-- content -->
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-sm-12 col-xs-12">
                    <div class="content-area">
                        <!-- content-area -->
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="post-block mb40">
                                    <!-- post-block -->
                                    <div class="post-img mb30">
                                        <!-- post-img -->
                                        <div class="post-sticky"></div>
                                        <a href="blog-single.html" class="imghover">   <img 
                          :src="require('/src/assets/images/blog-2.jpg')"
                          alt="logo"
                          width="420"
                          height="20"
						 
                          /></a>
                                    </div>
                                    <!-- /.post-img -->
                                    <div class=" ">
                                        <h2 class="post-title"><a href="blog-single.html" class="title">What to Expect When You're Getting Your Hair Transplant Done?</a></h2>
                                        <p class="meta"><span class="meta-date">16 . December . 2017</span><span class="meta-author"> by <a href="#" class="title"> admin </a></span><span class="meta-comment pull-right"><i class="icon-speech-bubble-12 icon-default icon-size-regular"></i><a href="#" class="title"> 05 </a></span></p>
                                        <div class="post-content mb30">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscingt at metus eraorbi convallis veldui vitae lorem egestiam porta dolor amet mattis luctulla faciliuli convallis veldui vitae lorem egestiam is molestie egella eget nulla et veldui vitae lorem nulla venenatis cursus eget et ipsnec augue.</p>
                                        </div>
                                        <a href="blog-single.html" class="btn btn-default">Read More</a>
                                    </div>
                                </div>
                                <!-- /.post-block -->
                            </div>
							<div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="post-block mb40">
                                    <!-- post-block -->
                                    <div class="post-img mb30">
                                        <!-- post-img -->
                                        <div class="post-sticky"></div>
                                        <a href="blog-single.html" class="imghover">   <img 
                          :src="require('/src/assets/images/blog-4.jpg')"
                          alt="logo"
						  width="420"
                          height="20"
                          /></a>
                                    </div>
                                    <!-- /.post-img -->
                                    <div class=" ">
                                        <h2 class="post-title"><a href="blog-single.html" class="title">What to Expect When You're Getting Your Hair Transplant Done?</a></h2>
                                        <p class="meta"><span class="meta-date">16 . December . 2017</span><span class="meta-author"> by <a href="#" class="title"> admin </a></span><span class="meta-comment pull-right"><i class="icon-speech-bubble-12 icon-default icon-size-regular"></i><a href="#" class="title"> 05 </a></span></p>
                                        <div class="post-content mb30">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscingt at metus eraorbi convallis veldui vitae lorem egestiam porta dolor amet mattis luctulla faciliuli convallis veldui vitae lorem egestiam is molestie egella eget nulla et veldui vitae lorem nulla venenatis cursus eget et ipsnec augue.</p>
                                        </div>
                                        <a href="blog-single.html" class="btn btn-default">Read More</a>
                                    </div>
                                </div>
                                <!-- /.post-block -->
                            </div>
                            
                            
                        </div>
                    </div>
                    <!-- /.content-area -->
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="sidebar-area">
                        <!-- sidebar-area -->
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="widget widget-search outline">
                                    <!--widget-search -->
                                    <form>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="Search Here">
                                            <span class="input-group-btn">
                    <button class="btn btn-default" type="button"><i class="fa fa-search"></i></button>
                    </span> </div>
                                        <!-- /input-group -->
                                    </form>
                                </div>
                                <!--/.widget-search -->
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class=" widget widget-category outline">
                                    <!--widget-category -->
                                    <h3 class="widget-title mb30">Categories</h3>
                                    <ul class="listnone bullet bullet-angle-double-right">
                                        <li><a href="#">Hair Restoration (10)</a></li>
                                        <li><a href="#">Hair Transplantation (05)</a></li>
                                        <li><a href="#">Beard Reconstruction (15)</a></li>
                                        <li><a href="#">Hair Replacement (18)</a></li>
                                        <li><a href="#">Laser Hair Regrowth (20)</a></li>
                                    </ul>
                                </div>
                                <!--/.widget-category -->
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="widget widget-recent-post outline"><!--widget-recent-post -->
                                    <h3 class="widget-title mb30">Recent post</h3>
                                    <ul class="listnone">
                                        <li>
                                            <div class="recent-block mb20"><!--recent-block-->
                                                <div class="row">
                                                    <div class="col-md-4 col-sm-2 col-xs-5">
                                                        <a href="#"><img 
														:src="require('/src/assets/images/blog-2.jpg')"
														alt="logo"
														width="60"
														height="20"
														/></a>
                                                    </div>
                                                   
                                                </div>
                                            </div><!--/.recent-block-->
                                        </li>
										<li>
                                            <div class="recent-block mb20"><!--recent-block-->
                                                <div class="row">
                                                    <div class="col-md-4 col-sm-2 col-xs-5">
                                                        <a href="#"><img 
														:src="require('/src/assets/images/blog-6.jpg')"
														alt="logo"
														width="60"
														height="20"
														/></a>
                                                    </div>
                                                   
                                                </div>
                                            </div><!--/.recent-block-->
                                        </li>
                                        
                                    </ul>
                                </div><!--/.widget-recent-post -->
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12 ">
                                <div class=" widget widget-archives outline">
                                    <!--widget-category -->
                                    <h3 class="widget-title mb30">Archives</h3>
                                    <ul class="listnone bullet bullet-angle-double-right">
                                        <li><a href="#">June (2017)</a></li>
                                        <li><a href="#">May (2017)</a></li>
                                        <li><a href="#">April (2017)</a></li>
                                        <li><a href="#">March (2017)</a></li>
                                        <li><a href="#">February (2017)</a></li>
                                    </ul>
                                </div>
                                <!--/.widget-category -->
                            </div>
               
                        </div>
                    </div>
                    <!-- /.sidebar-area -->
                </div>
            </div>
        </div>
    </div>


		

	</div>
</template>

<script>


export default {
	name: "UserDashboard",
	components: {},
	data() {
		return {

			
      docFileCount: [
        {
          id: 1,
          style: "border border-primary px-lg-3 p-3 py-4 rounded border-2",
          count: 86,
          img: "arrow-1.svg",
          title: "Total Applications",
          // excerpt: "Number of students documents for evaluation.",
          class: "col-lg-4 col-md-6 col-xl-3 mb-3 bg-white"
        },
        {
          id: 2,
          style: "border border-warning px-lg-3 p-3 py-4 rounded border-2",
          count: 12,
          img: "arrow-2.svg",
          title: "In Progress",
          // excerpt: "Number of students documents for evaluation.",
           class: "col-lg-4 col-md-6 col-xl-3 mb-3 bg-white"
        },
        {
          id: 3,
          style: "border border-success px-lg-3 p-3 py-4 rounded  border-2",
          count: 22,
          img: "arrow-3.svg",
          title: "Approved",
          // excerpt: "Number of students documents for evaluation.",
           class: "col-lg-4 col-md-6 col-xl-3 mb-3 bg-white"
        },
        {
          id: 4,
          style: "border border-danger px-lg-3 p-3 py-4 rounded border-2",
          count: "04",
          img: "arrow-4.svg",
          title: "Rejected",
          // excerpt: "Number of students documents for evaluation.",
           class: "col-lg-4 col-md-6 col-xl-3 mb-3 bg-white"
        },
      ],

		};
	},
	computed: {

		applicationSummary(){
			return this.studentApplication.slice(0, 5)
		},

	}
};
</script>

<style lang="scss" scoped>


.backgroundImage {
  display:inline-block;
  background-color: #FAC515;
  border-radius: 8px;
  padding: 8px 27px;
  border: none;
  font-size: 8px;
  
 }
$text-color: #1D2939;
.fs-14 {
	font-size: 14px!important;
}

@media screen and (max-width: 768px) {
	.w-md-18 {
		width: 170%;
	}
}
.p-02 {
    padding: 0.4em 0.4em !important;
}
.fs-6 {
	font-size: .8em !important;
}
.inboxImg {
	width: 39.92px;
	height: 40px;
}
.grey {
	color: #98A2B3;
}

.bg-white{
	background-color: #fff;
}

.student-app-heading{
	margin-top: 50px;
	margin-bottom: 20px;
	box-shadow: 0px 4px 16px rgba(16, 24, 40, 0.1);
	background-color: #fff;

	h4{
		font-weight: 600;
font-size: 1.5rem;
margin-bottom: 0;
line-height: 38px;
color: $text-color;
	}
}

.student-app {
	.student-app-card{
		box-shadow: 0px 4px 16px rgba(16, 24, 40, 0.1);
		background-color: #fff;
	}
}

.student-track {
	margin-top: 20px;
	margin-bottom: 20px;
	box-shadow: 0px 4px 16px rgba(16, 24, 40, 0.1);
	background-color: #fff;
	h4{
	font-weight: 600;
    font-size: 1.5rem;
    line-height: 38px;
    color: $text-color;
	margin-bottom: 0;
	}
}
.p-header {
	font-weight: 600;
    font-size: 1.5rem;
    line-height: 38px;
    color: $text-color;
	margin-bottom: 0;
}

button {
	font-size: 0.8rem;
}
</style>
