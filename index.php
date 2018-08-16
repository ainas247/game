<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <title>FAST FINGER CHALLENGE</title>
  </head>
  <body class="bg-danger text-white">
  	<header class="bg-dark text-center p-3 mb-5">
  		<h1>FAST FINGER CHALLENGE</h1>
  	</header>

  	<div class="container text-center">
  		<div class="row">
  			<div class="col-md-6 mx-auto">
  				<p class="bg-primary border border-dark">Instruction: HOW TO PLAY<br>Type each word in given amount of second to score.
  				 TO PLAY AGAIN just type the current word your Score will reset. SELECT LEVEL TO START PLAYING</p>
  				 <img src="you.png" width="100" height="100"> 
  				<span><h3 class="bg-dark">I Dare You to Score 100+ in Each LEVEL.</h3></span>
  				<button class="btn btn-success border border-dark" id="easy">Beginer</button>
  				<button class="btn btn-primary border border-dark" id="medium">Intermediate</button>
  				<button class="btn btn-info border border-dark" id="mini-hard">Advance</button>
  				<button class="btn btn-warning border border-dark" id="hard">Expert</button>
  				<p><h3> Type the giving word in <span class="text-danger" id="seconds"></span></h3></p><hr>

  				
  				<h2 class="display-2 text-white mb-5" id="demsg">Hello</h2>
  			
  				
  				
  					<input type="text" id="typing" placeholder="Start Typing to Play..." class="form-control form-control-lg" autofocus>
  				
  				

  				<h2><span id="message"></span> </h2>
  				<center><img src="smile.png" id="img1" width="50" height="50"></center>
  				<center><img src="sorry.png" id="img2" width="50" height="50"></center>


  				<div  class="row">
  					<div class="col-md-6 mb-5" >
  						<h3>Time Left:
  						<span id="timeleft">0</span></h3>
  					</div>
  					
  					<div class="col-md-6 mb-5">
  						<h3>Score:
  							<span id="score">0</span>
  						</h3>
  						
  					</div>
  					
  				</div>
  			
  			</div>
  		</div>

  	</div>







    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="main.js"></script>
  </body>
</html>