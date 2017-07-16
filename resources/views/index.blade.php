<!doctype html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Storypoint</title>

       <link href="/dist/assets/semantic/semantic.min.css" rel="stylesheet">

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
                <div class="logo float-left">
                    <i class="material-icons" style="color:#fff; font-size:1.1em">bubble_chart</i>
                    storypoint
                </div>
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
            <div class="masthead">
                <h1>The Software Success Platform</h1>
                <h2>How leading edge product teams <strong>plan</strong>, <strong>execute</strong>, and <strong>deliver</strong>.</h2>
                <div class="text-align-center">
                    <a href="/register" class="ui green button">
                        Start Your 30-Day Trial
                    </a>
                    <a href="/#pricing" class="ui inverted basic button">
                        See Pricing
                    </a>
                </div>
            </div>
            <div class="product-shot">
                <img src="/img/product-shot.png">
            </div>
        </div>

        <div class="content" id="features">
            <div class="ui grid">
                <div class="eight wide column">
                    <h3 class="ui header">Business Focused Product Plans</h3>
                    <p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.</p>
                    <h3 class="ui header">Product Release Insight</h3>
                    <p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
                </div>
                <div class="six wide right floated column">
                    <img src="/img/feature_1.png" class="ui large bordered rounded image">
                </div>
            </div>
        </div>

        <div class="background">
            <div class="content" style="max-width:700px">
                <h3 class="ui header">Clearly Defined Business Goals</h3>
                <p>Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.</p>
            </div>
        </div>

        <div class="content">
            <div class="ui grid">
                <div class="six wide left floated column">
                    <img src="/img/feature_2.png" class="ui large bordered rounded image">
                </div>
                <div class="eight wide column">
                    <h3 class="ui header">Holistic Development Path</h3>
                    <p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.</p>
                    <h3 class="ui header">Measurable Milestones</h3>
                    <p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
                </div>
            </div>
        </div>

        <div class="background" id="pricing">
            <div class="content" style="max-width:700px">
                <h3 class="ui header">Pricing For Teams</h3>
                <p>Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.</p>
            </div>
        </div>

        <div id="support">
            <div class="content" style="max-width:700px">
                <h3 class="ui header">Support</h3>
                <p>Instead of focusing on content creation and hard work, we have learned how to master the art of doing nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic and worth your attention.</p>
            </div>
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

    </body>
</html>
