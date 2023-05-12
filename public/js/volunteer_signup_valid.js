
// $(document).ready(function() {
//     $("#submitfv").click(function(e) {
    
//         var namev = $('#fullNamev').val();
//         var agev = $('#agev').val();
//         var phonenov = $('#phoneNumberv').val();
//         var password1v = $('#passwordv').val();
//         var cfmpassword1v = $('#confirmPasswordv').val();
        
//         if (namev.length < 3) {
//           $("#fullNamev").css("border-color", "red").css("background-color","#ea907a");
//             $('#cmmessage').html('<span class="error"><em>Your name should have atleast 3 characters</em></span>').css('color', 'red');
//               e.preventDefault();
//           }
        
  
//           var phoneno1 = /^\d{10}$/;
//           var validphone1 = phoneno1.test(phoneno);
//           if(!validphone1)
//            {
//              $("#phoneNumberv").css("border-color", "red").css("background-color","#ea907a");
//              $('#messagecnum').html('<span class="error"><em>Please Enter a Valid Contact Number</em></span>').css('color', 'red');
//              e.preventDefault();
//            }
        
//     if (password1v.length < 5 & password1v.length != 0) {
//           $("#passwordv").css("border-color", "red").css("background-color","#ea907a");
//     $('#messagepwdc').html('<span class="error"><em>Please Your Password should be greater than 5</em></span>').css('color', 'red');
//       e.preventDefault();
//         }
//         if ($('#passwordv').val() != $('#confirmPasswordv').val()) {
//                 console.log("FALSE");
//                 $("#passwordv").css("border-color", "red").css("background-color","#ea907a");
//                 $("#confirmPasswordv").css("border-color", "red").css("background-color","#ea907a");
//                   $('#messagecpwdc').html('Your passwords dont match').css('color', 'red');
    
//                 e.preventDefault();
//             }   
    
//         if (cfmpassword1v.length == 0) {
//           $("#confirmPasswordv").css("border-color", "red").css("background-color","#ea907a");
//     $('#messagecpwdc').html('<span class="error"><em>Please Confirm Your Password</em></span>').css('color', 'red');
//     e.preventDefault();
    
//           }
    
  
    
//       });
    
//     });
    
    
    
    
//   jQuery(function($) {
  
//     $("#agev").on("blur", function() {
//       if ($(this).val() <=15 ) {
//               $("#agev").css("border-color", "red").css("background-color","#ea907a");
//         $('#agemessage').html('<span class="error"><em>Enter a valid age (15 and above) </em></span>').css('color', 'red');
  
//       }
//     });
  
  
//     $("#agev").on("blur", function() {
//       if ($(this).val() >=15 ) {
//               $("#agev").css("border-color", "green").css("background-color","#90ee90");
//         $('#agemessage').html('<span class="error"><em> </em></span>').css('color', 'green');
  
//       }
//     });
//       $("#genderv").change(function () {
//             var send1 = this.value;
  
//             if(send1=="male"|| send1=="female"||"Do no wish to specify")
//             {
//               $("#genderv").css("border-color", "#00FF00");
//               $("#genderv").css("border-color", "green").css("background-color","#90ee90");
//             }
//         });
  
  
//     $("#fullNamev").on("blur", function() {
//       if ($(this).val().length == 0 && $(this).val().length < 1) {
//               $("#fullNamev").css("border-color", "red").css("background-color","#ea907a");
//         $('#cnmessage').html('<span class="error"><em>Please </em></span>').css('color', 'red');
  
//       }
//     });
  
  
//     $("#fullNamev").on("keyup", function() {
//       if ($(this).val().length == 0 && $(this).val().length < 1) {
//               $('#cnmessage').html('<span><em>Your name should have atleast 3 characters</em></span>').css('color', 'black');
  
//       }
//     });
  
//     $("#fullNamev").on("keyup", function() {
//       if ($(this).val().length >= 1) {
//         $("#fullNamev").css("border-color", "#00FF00");
//         $("#fullNamev").css("border-color", "green").css("background-color","#90ee90");
//         $('#cnmessage').html('<span class="error"><em></em></span>').css('color', 'red');
  
//       }
  
//     });
  
  
//   $("#fullNamev").on("blur", function() {
//     if ($(this).val().length >= 1) {
//       $("#fullNamev").css("border-color", "#00FF00");
//       $("#fullNamev").css("border-color", "green").css("background-color","#90ee90");
//       $('#messagecn').html('<span class="error"><em></em></span>').css('color', 'red');
  
//         }
//   });
  
  
  
//   $("#fullNamev").on("blur", function() {
//     if ($(this).val().length == 0 && $(this).val().length <= 2) {
//       $("#fullNamev").css("border-color", "red").css("background-color","#ea907a");
//       $('#cnmessage').html('<span class="error"><em>Your name should have atleast 3 characters </em></span>').css('color', 'red');
  
//     }
//   });
  
//   $("#fullNamev").on("keyup", function() {
//     if ($(this).val().length <=1) {
//       $("#fullNamev").css("border-color", "red").css("background-color","#ea907a");
//       $('#cnmessagecn').html('<span class="error"><em>Your name should have atleast 3 characters</em></span>').css('color', 'red');
  
//     }
//   });
  
//   $("#fullNamev").on("keyup", function() {
//     if ($(this).val().length > 2) {
//       $("#fullNamev").css("border-color", "#00FF00");
//       $("#fullNamev").css("border-color", "green").css("background-color","#90ee90");
//       $('#cnmessagecn').html('<span class="error"><em></em></span>').css('color', 'red');
//       }
//   });
  
//   $("#fullNamev").on("blur", function() {
//     if ($(this).val().length >2) {
//       $("#fullNamev").css("border-color", "#00FF00");
//       $("#fullNamev").css("border-color", "green").css("background-color","#90ee90");
//       $('#cnmessagecn').html('<span class="error"><em></em></span>').css('color', 'red');
//       }
//   });
  
  
//   $("#passwordv, #confirmPasswordv").on('focusout', function() {
//     if ($('#passwordv').val().length > 2 && $('#confirmPasswordv').val().length > 2)
//      {
//       if ($('#passwordv').val() == $('#confirmPasswordv').val()) {
//         $("#passwordv").css("border-color", "#00FF00");
//         $("#passwordv").css("border-color", "green").css("background-color","#90ee90");
//         $("#confirmPasswordv").css("border-color", "#00FF00");
//         $("#confirmPasswordv").css("border-color", "green").css("background-color","#90ee90");
//             $('#messagecpwdc').html('Your passwords match').css('color', 'green');
  
//       } else
  
//   $('#messagecpwdc').html('<span class="error"><em>Your passwords should match</em></span>').css('color', 'red');
//     }
//   });
  
  
  
  
  
//   $("#passwordv").on("keyup", function() {
//     if ($(this).val().length >= 5) {
//     $("#passwordv").css("border-color", "green").css("background-color","#90ee90");
//       $('#messagepwdc').html('<span class="error"><em></em></span>').css('color', 'green');
//   }
//   });
  
//   $("#passwordv").on("blur", function() {
//     if ($(this).val().length >= 5) {
//     $("#passwordv").css("border-color", "green").css("background-color","#90ee90");
//       $('#messagepwdc').html('<span class="error"><em></em></span>').css('color', 'green');
//   }
//   });
  
//   $("#passwordv").on("keyup", function() {
//     if ($(this).val().length < 5) {
//     $("#passwordv").css("border-color", "red").css("background-color","#ea907a");
//       $('#messagepwdc').html('<span class="error"><em>Enter a Password</em></span>').css('color', 'red');
//   }
//   });
  
//   $("#passwordv").on("blur", function() {
//     if ($(this).val().length < 5) {
//     $("#passwordv").css("border-color", "red").css("background-color","#ea907a");
//       $('#messagepwdc').html('<span class="error"><em>Enter a Password</em></span>').css('color', 'red');
//   }
//   });
  
  
//   $("#confirmPasswordv").on("blur", function() {
//     if ($(this).val().length < 5 ) {
//     $("#confirmPasswordv").css("border-color", "red").css("background-color","#ea907a");
//       $('#messagecpwdc').html('<span class="error"><em></em></span>').css('color', 'red');
//   }
//   });
  
  
  
  
  
//   $("#phoneNumberv").on("keyup", function() {
//     if ($(this).val().length >1 && $(this).val().length < 10) {
//       $("#phoneNumberv").css("border-color", "red").css("background-color","#ea907a");
//       $('#messagecnum').html('<span class="error"><em>Please Enter A Valid Phone Number</em></span>').css('color', 'red');
  
//     }
//   });
  
  
//   $("#phoneNumberv").on("keyup", function() {
//     if ($(this).val().length ==10) {
//       $("#phoneNumberv").css("border-color", "#00FF00");
//       $("#phoneNumberv").css("border-color", "green").css("background-color","#90ee90");
//       $('#messagecnum').html('<span class="error"><em></em></span>').css('color', 'red');
//       }
//   });
  
//   $("#phoneNumberv").on("blur", function() {
//     if ($(this).val().length ==10) {
//       $("#phoneNumberv").css("border-color", "#00FF00");
//       $("#phoneNumberv").css("border-color", "green").css("background-color","#90ee90");
//       $('#messagecnum').html('<span class="error"><em></em></span>').css('color', 'red');
//       }
//   });
  
  
  
  
//   $("#phoneNumberv").on("blur", function() {
//     if ($(this).val().length < 10) {
//       $("#phoneNumberv").css("border-color", "red").css("background-color","#ea907a");
//   $('#messagecnum').html('<span class="error"><em>Please Enter Your Phone Number</em></span>').css('color', 'red');
//       }
//   });
  
  
//   });