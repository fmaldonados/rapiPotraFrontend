<template>
  <div id="app">
    <div class="mn-content fixed-sidebar">
        <header class="mn-header navbar-fixed">
            <nav class="black">
                <div class="nav-wrapper row">
                    <section class="material-design-hamburger navigation-toggle">
                        <a href="javascript:void(0)" data-activates="slide-out" class="show-on-large material-design-hamburger__icon reverse-icon"><span class="material-design-hamburger__layer"></span></a>
                    </section>
                    <div class="header-title col s3 m3"><span class="chapter-title">Rapi Potra</span></div>
                    <form class="left search col s6 hide-on-small-and-down">
                        <div class="input-field"><input id="search" type="search" placeholder="Search" autocomplete="off"> <i class="material-icons search-icon">search</i></div>
                        <a href="javascript: void(0)" class="close-search"><i class="material-icons">close</i></a></form>
                    <ul class="right col s9 m3 nav-right-menu">
                        <li><a href="javascript:void(0)" data-activates="chat-sidebar" class="chat-button show-on-large"><i class="material-icons">email</i></a></li>
                        <li class="hide-on-small-and-down">
                            <a href="javascript:void(0)" data-activates="dropdown1" class="dropdown-button dropdown-right show-on-large"><i class="material-icons">notifications_none</i><span class="badge">4</span></a>
                            <ul id="dropdown1"
                                class="dropdown-content notifications-dropdown" style="width: 46px; opacity: 1; left: 988.75px; position: absolute; top: 0px; display: none;">
                                <li class="notificatoins-dropdown-container">
                                    <ul>
                                        <li class="notification-drop-title">Today</li>
                                        <li>
                                            <a href="#!">
                                                <div class="notification">
                                                    <div class="notification-icon circle cyan"><i class="material-icons">done</i></div>
                                                    <div class="notification-text">
                                                        <p><b>Alan Grey</b> uploaded new theme</p><span>7 min ago</span></div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <div class="notification">
                                                    <div class="notification-icon circle deep-purple"><i class="material-icons">cached</i></div>
                                                    <div class="notification-text">
                                                        <p><b>Tom</b> updated status</p><span>14 min ago</span></div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <div class="notification">
                                                    <div class="notification-icon circle red"><i class="material-icons">delete</i></div>
                                                    <div class="notification-text">
                                                        <p><b>Amily Lee</b> deleted account</p><span>28 min ago</span></div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <div class="notification">
                                                    <div class="notification-icon circle cyan"><i class="material-icons">person_add</i></div>
                                                    <div class="notification-text">
                                                        <p><b>Tom Simpson</b> registered</p><span>2 hrs ago</span></div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <div class="notification">
                                                    <div class="notification-icon circle green"><i class="material-icons">file_upload</i></div>
                                                    <div class="notification-text">
                                                        <p>Finished uploading files</p><span>4 hrs ago</span></div>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="notification-drop-title">Yestarday</li>
                                        <li>
                                            <a href="#!">
                                                <div class="notification">
                                                    <div class="notification-icon circle green"><i class="material-icons">security</i></div>
                                                    <div class="notification-text">
                                                        <p>Security issues fixed</p><span>16 hrs ago</span></div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <div class="notification">
                                                    <div class="notification-icon circle indigo"><i class="material-icons">file_download</i></div>
                                                    <div class="notification-text">
                                                        <p>Finished downloading files</p><span>22 hrs ago</span></div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">
                                                <div class="notification">
                                                    <div class="notification-icon circle cyan"><i class="material-icons">code</i></div>
                                                    <div class="notification-text">
                                                        <p>Code changes were saved</p><span>1 day ago</span></div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="hide-on-med-and-up"><a href="javascript:void(0)" class="search-toggle"><i class="material-icons">search</i></a></li>
                    </ul>
                </div>
            </nav>
        </header>
        <div class="search-results" style="display: none;">
            <div class="container search-container">
                <div class="row">
                    <div class="col s12 search-head">
                        <div class="row">
                            <div class="col s12">
                                <div class="left">
                                    <p class="search-results-title">Quick search results</p>
                                    <p class="search-filter left"><input type="checkbox" id="filled-in-box" checked="checked" class="filled-in">
                                        <label
                                            for="filled-in-box">Google search</label>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="res-not-found" style="display: none;">No results found</div>
                    </div>
                    <div class="col s12 m4 search-result-container" style="display: none;">
                        <div class="card card-transparent">
                            <div class="row valign-wrapper">
                                <div class="col s3"><img src="assets/images/profile-image-1.png" alt="" class="circle responsive-img z-depth-1"></div>
                                <div class="col s9"><span class="search-result-text">
                                          Search <span class="search-text search-result-highlight"></span><br><span class="secondary-search-text">Last active 2 days ago</span></span>
                                </div>
                            </div>
                        </div>
                        <div class="card card-transparent">
                            <div class="row valign-wrapper">
                                <div class="col s3"><img src="assets/images/profile-image-3.jpg" alt="" class="circle responsive-img z-depth-1"></div>
                                <div class="col s9"><span class="search-result-text">
                                          News about <span class="search-text search-result-highlight"></span><br><span class="secondary-search-text">23 Blogs</span></span>
                                </div>
                            </div>
                        </div>
                        <div class="card card-transparent">
                            <div class="row valign-wrapper">
                                <div class="col s3"><img src="assets/images/profile-image.png" alt="" class="circle responsive-img z-depth-1"></div>
                                <div class="col s9"><span class="search-result-text">
                                          Tom King (Works at <span class="search-text search-result-highlight"></span>)<br>                                    <span class="secondary-search-text">Avaible for freelance work</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4 search-result-container" style="display: none;">
                        <div class="card card-transparent ">
                            <div class="row valign-wrapper">
                                <div class="col s3"><span class="z-depth-1 circle search-circle indigo lighten-1">F</span></div>
                                <div class="col s9"><span class="search-result-text"><span class="search-text search-result-highlight"></span>                                    on Facebook
                                    <br><span class="secondary-search-text"><a href="#">View website</a></span></span>
                                </div>
                            </div>
                        </div>
                        <div class="card card-transparent">
                            <div class="row valign-wrapper">
                                <div class="col s3"><span class="z-depth-1 circle search-circle light-blue lighten-1">T</span></div>
                                <div class="col s9"><span class="search-result-text"><span class="search-text search-result-highlight"></span>                                    on Twitter
                                    <br><span class="secondary-search-text"><a href="#">View website</a></span></span>
                                </div>
                            </div>
                        </div>
                        <div class="card card-transparent">
                            <div class="row valign-wrapper">
                                <div class="col s3"><span class="z-depth-1 circle search-circle red darken-1">G</span></div>
                                <div class="col s9"><span class="search-result-text">
                                          Google+ <span class="search-text search-result-highlight"></span><br><span class="secondary-search-text"><a href="#">View website</a></span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m4 search-result-container" style="display: none;">
                        <div class="card card-transparent">
                            <div class="card-content first">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sunt in culpa qui<span class="search-text search-result-highlight"></span>                                    quis.</p>
                            </div>
                            <div class="card-action"><span class="grey-text">Yesterday, 4:56 PM</span></div>
                        </div>
                        <div class="card card-transparent">
                            <div class="card-content">
                                <p>Sunt in culpa qui <span class="search-text search-result-highlight"></span> officia deserunt
                                    mollit anim id est laborum. officia deserunt mollit anim id est laborum officia deserunt
                                    mollit anim</p>
                            </div>
                            <div class="card-action"><span class="grey-text">27 January 2016</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <aside id="chat-sidebar" class="side-nav white right-aligned" style="transform: translateX(0px);">
            <div class="side-nav-wrapper" style="padding-bottom: 0px;">
                <div class="col s12"></div>
                <div id="sidebar-chat-tab" class="col s12 sidebar-messages right-sidebar-panel active">
                    <p class="right-sidebar-heading">CHAT LIST</p>
                    <div class="chat-list">
                        <a href="javascript:void(0)" class="chat-message">
                            <div class="chat-item">
                                <div class="chat-item-image"><img src="assets/images/profile-image.png" alt="" class="circle"></div>
                                <div class="chat-item-info">
                                    <p class="chat-name">John Doe</p> <span class="chat-message">Hello</span></div>
                            </div>
                        </a>
                        <a href="javascript:void(0)" class="chat-message">
                            <div class="chat-item">
                                <div class="chat-item-image"><img src="assets/images/profile-image-1.png" alt="" class="circle"></div>
                                <div class="chat-item-info">
                                    <p class="chat-name">Tom Simpson</p> <span class="chat-message">How are you?</span></div>
                            </div>
                        </a>
                        <a href="javascript:void(0)" class="chat-message">
                            <div class="chat-item">
                                <div class="chat-item-image"><img src="assets/images/profile-image-3.jpg" alt="" class="circle"></div>
                                <div class="chat-item-info">
                                    <p class="chat-name">Alan Grey</p> <span class="chat-message">Call me later</span></div>
                            </div>
                        </a>
                        <a href="javascript:void(0)" class="chat-message">
                            <div class="chat-item">
                                <div class="chat-item-image"><img src="assets/images/profile-image.png" alt="" class="circle"></div>
                                <div class="chat-item-info">
                                    <p class="chat-name">Michael Fisher</p> <span class="chat-message">How's it going?</span></div>
                            </div>
                        </a>
                        <a href="javascript:void(0)" class="chat-message">
                            <div class="chat-item">
                                <div class="chat-item-image"><img src="assets/images/profile-image-1.png" alt="" class="circle"></div>
                                <div class="chat-item-info">
                                    <p class="chat-name">Amily Lee</p> <span class="chat-message">We're good</span></div>
                            </div>
                        </a>
                        <a href="javascript:void(0)" class="chat-message">
                            <div class="chat-item">
                                <div class="chat-item-image"><img src="assets/images/profile-image.png" alt="" class="circle"></div>
                                <div class="chat-item-info">
                                    <p class="chat-name">Sandra Smith</p> <span class="chat-message">See you later!</span></div>
                            </div>
                        </a>
                        <a href="javascript:void(0)" class="chat-message">
                            <div class="chat-item">
                                <div class="chat-item-image"><img src="assets/images/profile-image-3.jpg" alt="" class="circle"></div>
                                <div class="chat-item-info">
                                    <p class="chat-name">Sandra Smith</p> <span class="chat-message">Can we meet?</span></div>
                            </div>
                        </a>
                    </div>
                    <div class="chat-sidebar-options"><a href="#" class="left"><i class="material-icons">search</i></a></div>
                </div>
            </div>
        </aside>
        <aside id="chat-messages" class="side-nav white right-aligned" style="width: 320px; transform: translateX(100%);">
            <p class="sidebar-chat-name">Tom Simpson<a href="#" data-activates="chat-messages" class="chat-message-link"><i class="material-icons">keyboard_arrow_right</i></a></p>
            <div class="messages-container">
                <div class="message-wrapper them">
                    <div class="circle-wrapper"><img src="assets/images/profile-image-1.png" alt="" class="circle"></div>
                    <div class="text-wrapper">Lorem Ipsum</div>
                </div>
                <div class="message-wrapper me">
                    <div class="circle-wrapper"><img src="assets/images/profile-image-3.jpg" alt="" class="circle"></div>
                    <div class="text-wrapper">Integer in faucibus diam?</div>
                </div>
                <div class="message-wrapper them">
                    <div class="circle-wrapper"><img src="assets/images/profile-image-1.png" alt="" class="circle"></div>
                    <div class="text-wrapper">Vivamus quis neque volutpat, hendrerit justo vitae, suscipit dui</div>
                </div>
                <div class="message-wrapper me">
                    <div class="circle-wrapper"><img src="assets/images/profile-image-3.jpg" alt="" class="circle"></div>
                    <div class="text-wrapper">Suspendisse condimentum tortor et lorem pretium</div>
                </div>
                <div class="message-wrapper them">
                    <div class="circle-wrapper"><img src="assets/images/profile-image-1.png" alt="" class="circle"></div>
                    <div class="text-wrapper">dolore eu fugiat nulla pariatur</div>
                </div>
                <div class="message-wrapper me">
                    <div class="circle-wrapper"><img src="assets/images/profile-image-3.jpg" alt="" class="circle"></div>
                    <div class="text-wrapper">Duis maximus leo eget massa porta</div>
                </div>
            </div>
            <div class="message-compose-box">
                <div class="input-field"><input placeholder="Write message" id="message_compose" type="text"></div>
            </div>
        </aside>
        <aside id="slide-out" class="side-nav white fixed">
            <div class="side-nav-wrapper">
                <div class="sidebar-profile">
                    <div class="sidebar-profile-image"><img v-bind:src="user.imagen" alt="" class="circle"></div>
                    <div class="sidebar-profile-info">
                        <p>{{user.nombre}} {{user.apellido}}</p> <span>{{user.nombreUsuario}}</span></div>
                </div>
                <ul data-collapsible="accordion" class="sidebar-menu collapsible collapsible-accordion">
                    <router-link to='/inicio'>
                        <li class="no-padding active"><a class="waves-effect waves-grey active"><i class="material-icons">home</i>Inicio</a></li>
                    </router-link>
                    <router-link to='/eventos'>
                    <li class="no-padding"><a class="waves-effect waves-grey active"><i aria-hidden="true" class="fa fa-futbol-o material-icons"></i>Eventos</a></li>
                    </router-link>
                    <router-link to='/amigos'>
                    <li class="no-padding"><a class="waves-effect waves-grey active"><i class="material-icons">group</i>Amigos</a></li>
                    </router-link>
                    <router-link to='/configuracion'>
                    <li class="no-padding"><a class="waves-effect waves-grey active"><i class="material-icons">settings</i>Configuracion</a></li>
                    </router-link>
                    <router-link to='/logout'>
                    <li class="no-padding"><a class="waves-effect waves-grey active"><i class="material-icons">exit_to_app</i>Cerrar Sesion</a></li>
                    </router-link>
                </ul>
            </div>
        </aside>
        <main class="mn-inner inner-active-sidebar"></main>
    </div>
</div>
</template>

<script>
    export default {
      name: 'app',
      data () {
        return {
            //sock: {},
            //socks : [],
            //msg: 'Welcome to Your Vue.js App'
            user:{nombre:"Felix",apellido:"Maldonado",nombreUsuario:"felix_em",imagen:"https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png"},
            chat:{}
        }
  }
    }
</script>
  
<style>
  .router{
    display: inline-block; 
  }
</style>
