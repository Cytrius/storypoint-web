<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <base href="/">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    @if(isset($assets['css']))
        @foreach($assets['css'] as $asset)
            <link href="{{ '/dist/'.$asset }}" rel="stylesheet">
        @endforeach
    @endif

    <!-- Fonts -->
   <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet">
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

   <style>
        body { background:#f6f8fa !important; }
   </style>
</head>
<body>

    <div class="ui active inverted dimmer app-loader">
        <div class="ui text loader">Loading</div>
    </div>

    <app-root></app-root>

    <!-- Scripts -->
    @if(isset($assets['js']))
        @foreach($assets['js'] as $asset)
            <script src="{{ '/dist/'.$asset }}"></script>
        @endforeach
    @endif
    
    <script src="/js/jquery/dist/jquery.min.js"></script>
    <script src="/js/semantic/semantic.min.js"></script>
</body>
</html>

