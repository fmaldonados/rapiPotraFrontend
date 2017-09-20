<template>
	<div id="login">
		<div style="background-image:url('static/images/soccer.gif'); height:662px; opacity: 0.9;">
			<div class="mn-content valign-wrapper">
            <main class="mn-inner container" >
                <div class="valign">
                      <div class="row">
                          <div class="col s12 m6 l4 offset-l4 offset-m3">
                              <div class="card white darken-1">
                                  <div class="card-content ">
                                      <span class="card-title">Sign In</span>
                                       <div class="row">
                                           <form class="col s12">
                                               <div class="input-field col s12">
                                                   <input id="username" type="email" class="validate">
                                                   <label for="username">Username</label>
                                               </div>
                                               <div class="input-field col s12">
                                                   <input id="password" type="password" class="validate">
                                                   <label for="password">Password</label>
                                               </div>
                                               <div class="col s12 right-align m-t-sm">
                                                   <a class="waves-effect waves-grey btn-flat">sign up</a>
                                                   <router-link to= '/inicio'> <a class="waves-effect waves-light btn teal">sign in</a>
                                                   </router-link>
                                               </div>
                                           </form>
                                      </div>
                                  </div>
                              </div>
                          </div>
                    </div>
                </div>
            </main>
        </div>
	</div>
		</div>
</template>

<script>
    export default {
        name:'login'
    }
</script>
