<!doctype html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Storypoint</title>

       <link href="/dist/assets/semantic/semantic.min.css" rel="stylesheet">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Fonts -->
       <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet">
       <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600" rel="stylesheet">
       <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

        <!-- Styles -->
        <link href="/css/index.css" rel="stylesheet">
    </head>
    <body>
        <div class="top">
            <div class="navigation">
                <a href="/" class="logo float-left">
                    <i class="material-icons" style="color:#fff; font-size:1.1em">bubble_chart</i>
                    storypoint
                </a>
                <div class="links float-right">
                    <a href="/#features">Features</a>
                    <a href="/#pricing">Pricing</a>
                    <a href="/#support">Support</a>
                    @if (Auth::check())
                        <a class="button" href="{{ url('/app') }}">Dashboard</a>
                    @else
                        <a class="button" href="{{ url('/register') }}">Try Free</a>
                        <a href="{{ url('/login') }}">Login</a>
                    @endif
                </div>
            </div>
        </div>

        <div class="content yield">
            @yield('content')
        </div>

        <div class="ui inverted vertical footer segment">
            <div class="ui container">
              <div class="ui stackable inverted divided equal height stackable grid">
                <div class="three wide column">
                  <h4 class="ui inverted header">About</h4>
                  <div class="ui inverted link list">
                    <a href="#" class="item">Sitemap</a>
                    <a href="#" class="item">Contact Us</a>
                    <a href="#" class="item">Religious Ceremonies</a>
                    <a href="#" class="item">Gazebo Plans</a>
                  </div>
                </div>
                <div class="three wide column">
                  <h4 class="ui inverted header">Services</h4>
                  <div class="ui inverted link list">
                    <a href="#" class="item">Banana Pre-Order</a>
                    <a href="#" class="item">DNA FAQ</a>
                    <a href="#" class="item">How To Access</a>
                    <a href="#" class="item">Favorite X-Men</a>
                  </div>
                </div>
                <div class="seven wide column">
                  <h4 class="ui inverted header">Footer Header</h4>
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </div>
              </div>
            </div>
          </div>

        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}"></script>
         <script src="/dist/assets/semantic/semantic.min.js"></script>
    </body>
</html>
