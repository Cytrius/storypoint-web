<!doctype html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
       <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet">
       <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600" rel="stylesheet">

       <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #ffffff;
                color: #636b6f;
                font-family: 'Source Sans Pro', sans-serif;
                font-weight: 300;
                font-size:18px;
                height: 100vh;
                margin: 0;
            }

            .top {
                width:100%;
                background-image: -webkit-linear-gradient(113deg, #55c18d, #4c9ab2 37%, #4169e1 83%, #4169e1 99%);
                background-image: linear-gradient(337deg, #55c18d, #4c9ab2 37%, #4169e1 83%, #4169e1 99%);
            }

            .navigation {
                max-width:980px;
                margin:0 auto;
                padding:1.5em 1em;
            }

            .float-left {
                float:left;
            }
            .float-right {
                float:right;
            }

            .logo {
                font-family: 'Ubuntu', sans-serif;
                font-weight:bold;
                font-size:1.55em;
                color:#fff;
                line-height:40px;
                height:40px;
            }
            .links {
                line-height:40px;
                font-size:1em;
                word-spacing:2.5em;
                height:40px;
            }
            .links>a {
                color:#fff;
                text-decoration: none;
                word-spacing:0.1em;
            }
            .links>a:not(.button):hover {
                text-decoration: underline;
            }
            .links>.button {
                background:rgba(255, 255, 255, 0.1);
                padding:0.6em;
                border-radius:0.25em;
            }
            .links>.button:hover {
                background:rgba(255, 255, 255, 0.15);
            }

            .masthead {
                padding-top:9em;
            }
            .masthead h1 {
                width:100%;
                text-align:center;
                color:#fff;
                margin:0;
                font-weight:bold;
                font-size:2.3em;
            }
            .masthead h2 {
                width:100%;
                text-align:center;
                color:#fff;
                margin:0;
                font-weight:300;
                font-size:1.9em;
                margin-top:0.25em;
            }

            .product-shot {
                width:65%;
                margin:0 auto;
                padding-top:7em;
            }
            .product-shot img {
                display:block;
            }

            .material-icons {
                font-size:inherit;
                position: relative;
                top: 0.15em;
            }

            .content {
                max-width:980px;
                margin:0 auto;
                padding:3em 1em;
            }
            .background {
                background:#f5f7fd;
                width:100%;
            }

            .content h3 {
                color:#3a405a;
                font-size:1.8em;
                margin:0;
            }

        </style>
    </head>
    <body>
        <div class="top">
            <div class="navigation">
                <div class="logo float-left">
                    <i class="material-icons" style="color:#fff; font-size:1.1em">bubble_chart</i>
                    storypoint
                </div>
                <div class="links float-right">
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Support</a>
                    @if (Auth::check())
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a class="button" href="{{ url('/register') }}">Try Free</a>
                        <a href="{{ url('/login') }}">Login</a>
                    @endif
                </div>
            </div>
            <div class="masthead">
                <h1>The best way to build software.</h1>
                <h2>Insight for your business, process for your developers.</h2>
            </div>
            <div class="product-shot">
                <img src="/img/product-shot.png">
            </div>
        </div>

        <div class="content">
            <h3>Features</h3>
            <ul>
                <li></li>
            </ul>
        </div>

        <div class="background">
            <div class="content">
                <h3>Business</h3>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>

        <div class="content">
            <h3>Customer Service</h3>
            <ul>
                <li></li>
            </ul>
        </div>

    </body>
</html>
