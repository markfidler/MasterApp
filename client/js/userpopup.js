var userpopUpHTML  ='<div id="user-popUp" class="user-popUp mfp-with-anim mfp-hide">';
userpopUpHTML  +=        '<div class="sc_tabs">';
userpopUpHTML  +=            '<ul class="loginHeadTab">';
userpopUpHTML  +=                '<li><a href="#loginForm" class="loginFormTab icon">Log In</a></li>';
userpopUpHTML  +=                '<li ><a href="#registerForm" class="registerFormTab icon" role="presentation">Create an Account</a></li>';
userpopUpHTML  +=            '</ul>';
userpopUpHTML  +=            '<div id="loginForm" class="formItems loginFormBody">';
userpopUpHTML  +=                '<div class="itemformLeft">';
userpopUpHTML  +=                    '<form action="#" method="post" name="login_form" class="formValid">';
userpopUpHTML  +=                        '<input type="hidden" name="redirect_to" value="#">';
userpopUpHTML  +=                        '<ul class="formList">';
userpopUpHTML  +=                            '<li class="icon formLogin"><input type="text" id="login" name="log" value="" placeholder="Login"></li>';
userpopUpHTML  +=                            '<li class="icon formPass"><input type="password" id="password" name="pwd" value="" placeholder="Password"></li>';
userpopUpHTML  +=                            '<li class="remember">';
userpopUpHTML  +=                                '<a href="#" class="forgotPwd">Forgot password?</a>';
userpopUpHTML  +=                                '<input type="checkbox" value="forever" id="rememberme" name="rememberme">';
userpopUpHTML  +=                                '<label for="rememberme">Remember me</label>';
userpopUpHTML  +=                            '</li>';
userpopUpHTML  +=                            '<li><a href="#" class="sendEnter enter">Login</a></li>';
userpopUpHTML  +=                        '</ul>';
userpopUpHTML  +=                    '</form>';
userpopUpHTML  +=                '</div>';
userpopUpHTML  +=                '<div class="itemformRight">';
userpopUpHTML  +=                    '<ul class="formList">';
userpopUpHTML  +=                        '<li>You can login using your social profile</li>';
userpopUpHTML  +=                        '<li class="loginSoc">';
userpopUpHTML  +=                            '<a href="#" class="iconLogin fb"></a>';
userpopUpHTML  +=                            '<a href="#" class="iconLogin tw"></a>';
userpopUpHTML  +=                            '<a href="#" class="iconLogin gg"></a>';
userpopUpHTML  +=                        '</li>';
userpopUpHTML  +=                        '<li><a href="#" class="loginProblem">Problem with login?</a></li>';
userpopUpHTML  +=                    '</ul>';
userpopUpHTML  +=                '</div>';
userpopUpHTML  +=                '<div class="result messageBlock"></div>';
userpopUpHTML  +=            '</div>';
userpopUpHTML  +=            '<div id="registerForm" class="formItems registerFormBody">';
userpopUpHTML  +=                '<form name="register_form" method="post" class="formValid">';
userpopUpHTML  +=                    '<input type="hidden" name="redirect_to" value="#">';
userpopUpHTML  +=                    '<div class="itemformLeft">';
userpopUpHTML  +=                        '<ul class="formList">';
userpopUpHTML  +=                            '<li class="icon formUser"><input type="text" id="registration_username" name="registration_username" value="" placeholder="User name (login)"></li>';
userpopUpHTML  +=                            '<li class="icon formLogin"><input type="text" id="registration_email" name="registration_email" value="" placeholder="E-mail"></li>';
userpopUpHTML  +=                            '<li class="i-agree">';
userpopUpHTML  +=                                '<input type="checkbox" value="forever" id="i-agree" name="i-agree">';
userpopUpHTML  +=                                '<label for="i-agree">I agree with</label> <a href="#">Terms &amp; Conditions</a>';
userpopUpHTML  +=                            '</li>';
userpopUpHTML  +=                            '<li><a href="" class="sendEnter enter">Sign Up</a></li>';
userpopUpHTML  +=                        '</ul>';
userpopUpHTML  +=                    '</div>';
userpopUpHTML  +=                    '<div class="itemformRight">';
userpopUpHTML  +=                        '<ul class="formList">';
userpopUpHTML  +=                            '<li class="icon formPass"><input type="password" id="registration_pwd" name="registration_pwd" value="" placeholder="Password"></li>';
userpopUpHTML  +=                            '<li class="icon formPass"><input type="password" id="registration_pwd2" name="registration_pwd2" value="" placeholder="Confirm Password"></li>';
userpopUpHTML  +=                        '</ul>';
userpopUpHTML  +=                    '</div>';
userpopUpHTML  +=                '</form>';
userpopUpHTML  +=                '<div class="result messageBlock"></div>';
userpopUpHTML  +=            '</div>';
userpopUpHTML  +=        '</div>';
userpopUpHTML  +=    '<button title="Close (Esc)" type="button" class="mfp-close">×</button>';
userpopUpHTML  +='</div>';

jQuery('body').append(userpopUpHTML);