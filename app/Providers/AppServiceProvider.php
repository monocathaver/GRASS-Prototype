<?php

namespace App\Providers;
use Illuminate\Support\ServiceProvider;

use App\Http\Implementations\AuthServiceImpl;
use App\Http\Implementations\CalendarServiceImpl;
use App\Http\Implementations\GenerateServiceImpl;
use App\Http\Services\AuthService;
use App\Http\Services\CalendarService;
use App\Http\Services\GenerateService;

class AppServiceProvider extends ServiceProvider
{
    public $bindings = [
        AuthService::class => AuthServiceImpl::class,
        CalendarService::class => CalendarServiceImpl::class,
        GenerateService::class => GenerateServiceImpl::class,
    ];
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
