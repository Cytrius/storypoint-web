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

        @component('components/footer');
        @endcomponent

        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}"></script>
         <script src="/dist/assets/semantic/semantic.min.js"></script>
    </body>
</html>
