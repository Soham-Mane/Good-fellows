
// $(document).ready(function() {
//     $("#submitf").click(function(e) {
    
//         var name = $('#fullName').val();
//         var age = $('#age').val();
//         var phoneno = $('#phoneNumber').val();
//         var password1 = $('#password').val();
//         var cfmpassword1 = $('#confirmPassword').val();
        
//         if (name.length < 3) {
//           $("#fullName").css("border-color", "red").css("background-color","#ea907a");
//             $('#cmmessage').html('<span class="error"><em>Your name should have atleast 3 characters</em></span>').css('color', 'red');
//               e.preventDefault();
//           }
        

//         if (age<50 ) {
//             $("#age").css("border-color", "red").css("background-color","#ea907a");
//             $('#messagecn').html('<span class="error"><em>Enter a valid age(greter than 50)</em></span>').css('color', 'red');
//       e.preventDefault();
//           }
//           var phoneno1 = /^\d{10}$/;
//           var validphone1 = phoneno1.test(phoneno);
//           if(!validphone1)
//            {
//              $("#phoneNumber").css("border-color", "red").css("background-color","#ea907a");
//              $('#messagecnum').html('<span class="error"><em>Please Enter a Valid Contact Number</em></span>').css('color', 'red');
//              e.preventDefault();
//            }
        
//     if (password1.length < 5 & password1.length != 0) {
//           $("#password").css("border-color", "red").css("background-color","#ea907a");
//     $('#messagepwdc').html('<span class="error"><em>Please Your Password should be greater than 5</em></span>').css('color', 'red');
//       e.preventDefault();
//         }
//         if ($('#password').val() != $('#confirmPassword').val()) {
//                 console.log("FALSE");
//                 $("#password").css("border-color", "red").css("background-color","#ea907a");
//                 $("#confirmPassword").css("border-color", "red").css("background-color","#ea907a");
//                   $('#messagecpwdc').html('Your passwords dont match').css('color', 'red');
    
//                 e.preventDefault();
//             }   
    
//         if (cfmpassword1.length == 0) {
//           $("#confirmPassword").css("border-color", "red").css("background-color","#ea907a");
//     $('#messagecpwdc').html('<span class="error"><em>Please Confirm Your Password</em></span>').css('color', 'red');
//     e.preventDefault();
    
//           }
    

    
//       });
    
//     });
    
    
    
    
// jQuery(function($) {
  

//     $("#age").on("blur", function() {
//       if ($(this).val() <50 ) {
//               $("#age").css("border-color", "red").css("background-color","#ea907a");
//         $('#agemessage').html('<span class="error"><em>Enter a valid age (50 and above) </em></span>').css('color', 'red');
  
//       }
//     });
  
//     $("#age").on("blur", function() {
//       if ($(this).val() >=50 ) {
//               $("#age").css("border-color", "green").css("background-color","#90ee90");
//         $('#agemessage').html('<span class="error"><em></em></span>').css('color', 'geen');
  
//       }
//     });
//     $("#fullName").on("keyup", function() {
//       if ($(this).val().length == 0 && $(this).val().length < 1) {
//               $('#cnmessage').html('<span><em>Your name should have atleast 3 characters</em></span>').css('color', 'black');
  
//       }
//     });
  

//       $("#gender").change(function () {
//             var send1 = this.value;
//             if(send1=="male"|| send1=="female"||"Do no wish to specify")
//             {
//               $("#gender").css("border-color", "#00FF00");
//               $("#gender").css("border-color", "green").css("background-color","#90ee90");
//             }
//         });
  
  
//     $("#fullName").on("blur", function() {
//       if ($(this).val().length == 0 && $(this).val().length < 3) {
//               $("#fullName").css("border-color", "red").css("background-color","#ea907a");
//         $('#cnmessage').html('<span class="error"><em>Please </em></span>').css('color', 'red');
  
//       }
//     });
  
  
//     $("#fullName").on("keyup", function() {
//       if ($(this).val().length == 0 && $(this).val().length < 3) {
//               $('#cnmessage').html('<span><em>Your name should have atleast 3 characters</em></span>').css('color', 'black');
  
//       }
//     });
  
//     $("#fullName").on("keyup", function() {
//       if ($(this).val().length >= 3) {
//         $("#fullName").css("border-color", "#00FF00");
//         $("#fullName").css("border-color", "green").css("background-color","#90ee90");
//         $('#cnmessage').html('<span class="error"><em></em></span>').css('color', 'red');
  
//       }
  
//     });
  
  
//   $("#fullName").on("blur", function() {
//     if ($(this).val().length >= 1) {
//       $("#fullName").css("border-color", "#00FF00");
//       $("#fullName").css("border-color", "green").css("background-color","#90ee90");
//       $('#messagecn').html('<span class="error"><em></em></span>').css('color', 'red');
  
//         }
//   });
  
  
  
//   $("#fullName").on("blur", function() {
//     if ($(this).val().length == 0 && $(this).val().length <= 3) {
//       $("#fullName").css("border-color", "red").css("background-color","#ea907a");
//       $('#cnmessage').html('<span class="error"><em>Your name should have atleast 3 characters </em></span>').css('color', 'red');
  
//     }
//   });
  
//   $("#fullName").on("keyup", function() {
//     if ($(this).val().length <=3) {
//       $("#fullName").css("border-color", "red").css("background-color","#ea907a");
//       $('#cnmessagecn').html('<span class="error"><em>Your name should have atleast 3 characters</em></span>').css('color', 'red');
  
//     }
//   });
  
//   $("#fullName").on("keyup", function() {
//     if ($(this).val().length > 3) {
//       $("#fullName").css("border-color", "#00FF00");
//       $("#fullName").css("border-color", "green").css("background-color","#90ee90");
//       $('#cnmessagecn').html('<span class="error"><em></em></span>').css('color', 'red');
//       }
//   });
  
//   $("#fullName").on("blur", function() {
//     if ($(this).val().length >3) {
//       $("#fullName").css("border-color", "#00FF00");
//       $("#fullName").css("border-color", "green").css("background-color","#90ee90");
//       $('#cnmessagecn').html('<span class="error"><em></em></span>').css('color', 'red');
//       }
//   });
  
  
//   $("#password, #confirmPassword").on('focusout', function() {
//     if ($('#password').val().length > 2 && $('#confirmPassword').val().length > 2)
//      {
//       if ($('#password').val() == $('#confirmPassword').val()) {
//         $("#password").css("border-color", "#00FF00");
//         $("#password").css("border-color", "green").css("background-color","#90ee90");
//         $("#confirmPassword").css("border-color", "#00FF00");
//         $("#confirmPassword").css("border-color", "green").css("background-color","#90ee90");
//             $('#messagecpwdc').html('Your passwords match').css('color', 'green');
  
//       } else
  
//   $('#messagecpwdc').html('<span class="error"><em>Your passwords should match</em></span>').css('color', 'red');
//     }
//   });
  
  
//   $("#password").on("keyup", function() {
//     if ($(this).val().length >= 5) {
//     $("#password").css("border-color", "green").css("background-color","#90ee90");
//       $('#messagepwdc').html('<span class="error"><em></em></span>').css('color', 'green');
//   }
//   });
  
//   $("#password").on("blur", function() {
//     if ($(this).val().length >=5) {
//     $("#password").css("border-color", "green").css("background-color","#90ee90");
//       $('#messagepwdc').html('<span class="error"><em></em></span>').css('color', 'green');
//   }
//   });
  
  
//   $("#password").on("keyup", function() {
//     if ($(this).val().length < 5) {
//     $("#password").css("border-color", "red").css("background-color","#ea907a");
//       $('#messagepwdc').html('<span class="error"><em>Enter a Password</em></span>').css('color', 'red');
//   }
//   });
  
//   $("#password").on("blur", function() {
//     if ($(this).val().length < 5) {
//     $("#password").css("border-color", "red").css("background-color","#ea907a");
//       $('#messagepwdc').html('<span class="error"><em>Enter a Password</em></span>').css('color', 'red');
//   }
//   });
  
  
//   $("#confirmPassword").on("blur", function() {
//     if ($(this).val().length < 5 ) {
//     $("#confirmPassword").css("border-color", "red").css("background-color","#ea907a");
//       $('#messagecpwdc').html('<span class="error"><em></em></span>').css('color', 'red');
//   }
//   });
  
  
  
  
  
//   $("#phoneNumber").on("keyup", function() {
//     if ($(this).val().length >1 && $(this).val().length < 10) {
//       $("#phoneNumber").css("border-color", "red").css("background-color","#ea907a");
//       $('#messagecnum').html('<span class="error"><em>Please Enter A Valid Phone Number</em></span>').css('color', 'red');
  
//     }
//   });
  
  
//   $("#phoneNumber").on("keyup", function() {
//     if ($(this).val().length ==10) {
//       $("#phoneNumber").css("border-color", "#00FF00");
//       $("#phoneNumber").css("border-color", "green").css("background-color","#90ee90");
//       $('#messagecnum').html('<span class="error"><em></em></span>').css('color', 'red');
//       }
//   });
  
//   $("#phoneNumber").on("blur", function() {
//     if ($(this).val().length ==10) {
//       $("#phoneNumber").css("border-color", "#00FF00");
//       $("#phoneNumber").css("border-color", "green").css("background-color","#90ee90");
//       $('#messagecnum').html('<span class="error"><em></em></span>').css('color', 'red');
//       }
//   });
  
  
  
  
//   $("#phoneNumber").on("blur", function() {
//     if ($(this).val().length < 10) {
//       $("#phoneNumber").css("border-color", "red").css("background-color","#ea907a");
//   $('#messagecnum').html('<span class="error"><em>Please Enter Your Phone Number</em></span>').css('color', 'red');
//       }
//   });
  
  
//   });