alert("Hello");

      // var newReservation = {
      //   name: "Elton",
      //   phone: "4075741342",
      //   email: "elton407@gmail.com",
      //   uniqueId:22
      //   //age: $("#age").val().trim(),
      //   //forcePoints: $("#force-points").val().trim()
      // };

      // // var waitList = {
      // // 	name:,
      // //   phone:,
      // //   email:,
      // //   uniqueId:
      // // }

     
      // // Question: What does this code do??
      // $.post("/api/tables", newReservation)
      // .done(function(data) {
      //   console.log(data);
      //   alert("Adding Reservation...");
      // });

    function getFormData(){
	var a = $("#myName").val().trim();
	var b = $("#myPhone").val().trim();
	var c = $("#myEmail").val().trim();
	var d = $("#myID").val().trim();

	var myReservation = new Reservation(a,b,c,d);

	$.post("/api/tables", newReservation)
      .done(function(data) {
        //console.log(data);
        //alert("Adding character...");
      });

	}



      
      var newReservation = {
        name: "Elton",
        phone: "4075741342",
        email: "elton407@gmail.com",
        uniqueId:22
      };
      // Question: What does this code do??
      
  

  module.exports = newReservation;
