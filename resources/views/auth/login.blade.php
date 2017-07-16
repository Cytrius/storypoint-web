@extends('layouts.app')

@section('content')
    <div class="ui header" style="text-align:center">
        Login
        <span class="sub header">Access your storypoint account.</span>
    </div>
    <div class="ui divider"></div>
    <div class="ui container" style="max-width:320px !important">
        <div class="ui basic segment">
            <form class="ui form" role="form" method="POST" action="{{ route('login') }}">
                {{ csrf_field() }}

                        <div class="ui field{{ $errors->has('email') ? ' error' : '' }}">
                            <label for="email">E-Mail Address</label>
                            <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required autofocus>

                            @if ($errors->has('email'))
                                <div class="ui error message">
                                    {{ $errors->first('email') }}
                                </div>
                            @endif
                        </div>

                        <div class="ui field{{ $errors->has('password') ? ' error' : '' }}">
                            <label for="password">Password</label>
                            <input id="password" type="password" class="form-control" name="password" required>

                            @if ($errors->has('password'))
                                <div class="ui error message">
                                    {{ $errors->first('password') }}
                                </div>
                            @endif
                        </div>

                        <div class="ui field">
                            <div class="ui checkbox">
                                <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> 
                                <label>Remember Me</label>
                            </div>
                        </div>


                        <button type="submit" class="ui tiny button">
                            Login
                        </button>

                        <a href="{{ route('password.request') }}">
                            Forgot Your Password?
                        </a>

            </form>
        </div>
    </div>
@endsection
