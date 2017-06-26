<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        /** Dev build - use generic files **/
        if (!file_exists(public_path().'/dist/stats.json'))
        {
            $assets = [
                'js' => [
                    "inline.bundle.js",
                    "polyfills.bundle.js",
                    "scripts.bundle.js",
                    "styles.bundle.js",
                    "vendor.bundle.js",
                    "main.bundle.js"
                ]
            ];
        }
        else
        {
            $manifest = file_get_contents(public_path().'/dist/stats.json');

            $manifest = json_decode($manifest, true);

            $assetsByChunkName = $manifest['assetsByChunkName'];

            $assets = [];

            foreach($assetsByChunkName as $asset) {
                if (is_array($asset))
                    $asset = $asset[0];
                
                $ext = explode('bundle.', $asset);
                $name = explode('.', $asset);

                $assets[$ext[1]][$name[0]] = $asset;
            }

            if (isset($assets['js']))
                $assets['js'] = array_replace(
                    array_flip(
                        [
                            "inline",
                            "polyfills",
                            "scripts",
                            "vendor",
                            "main"
                        ]
                    ),
                    $assets['js']
                );
        }

        return view('app', [
            'assets' => $assets
        ]);
    }
}
