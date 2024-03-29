import { NgZone, ElementRef, AfterViewInit, OnDestroy, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { SwiperDirective } from './swiper.directive';
import { SwiperConfigInterface } from './swiper.interfaces';
export declare class SwiperComponent implements AfterViewInit, OnDestroy {
    private zone;
    private cdRef;
    private platformId;
    private defaults;
    private mo;
    swiperConfig: any;
    paginationBackup: any;
    paginationConfig: any;
    index: number | null;
    disabled: boolean;
    performance: boolean;
    config?: SwiperConfigInterface;
    useSwiperClass: boolean;
    indexChange: EventEmitter<number>;
    swiperSlides?: ElementRef;
    directiveRef?: SwiperDirective;
    readonly isAtLast: boolean;
    readonly isAtFirst: boolean;
    S_INIT: EventEmitter<any>;
    S_BEFOREDESTROY: EventEmitter<any>;
    S_SCROLL: EventEmitter<any>;
    S_PROGRESS: EventEmitter<any>;
    S_RESIZE: EventEmitter<any>;
    S_BREAKPOINT: EventEmitter<any>;
    S_BEFORERESIZE: EventEmitter<any>;
    S_KEYPRESS: EventEmitter<any>;
    S_SLIDERMOVE: EventEmitter<any>;
    S_SLIDECHANGE: EventEmitter<any>;
    S_SETTRANSLATE: EventEmitter<any>;
    S_SETTRANSITION: EventEmitter<any>;
    S_FROMEDGE: EventEmitter<any>;
    S_REACHEND: EventEmitter<any>;
    S_REACHBEGINNING: EventEmitter<any>;
    S_AUTOPLAY: EventEmitter<any>;
    S_AUTOPLAYSTART: EventEmitter<any>;
    S_AUTOPLAYSTOP: EventEmitter<any>;
    S_IMAGESREADY: EventEmitter<any>;
    S_LAZYIMAGELOAD: EventEmitter<any>;
    S_LAZYIMAGEREADY: EventEmitter<any>;
    S_SCROLLDRAGEND: EventEmitter<any>;
    S_SCROLLDRAGMOVE: EventEmitter<any>;
    S_SCROLLDRAGSTART: EventEmitter<any>;
    S_TAP: EventEmitter<any>;
    S_CLICK: EventEmitter<any>;
    S_DOUBLETAP: EventEmitter<any>;
    S_TOUCHEND: EventEmitter<any>;
    S_TOUCHMOVE: EventEmitter<any>;
    S_TOUCHSTART: EventEmitter<any>;
    S_TOUCHMOVEOPPOSITE: EventEmitter<any>;
    S_TRANSITIONEND: EventEmitter<any>;
    S_TRANSITIONSTART: EventEmitter<any>;
    S_SLIDEPREVTRANSITIONEND: EventEmitter<any>;
    S_SLIDEPREVTRANSITIONSTART: EventEmitter<any>;
    S_SLIDENEXTTRANSITIONEND: EventEmitter<any>;
    S_SLIDENEXTTRANSITIONSTART: EventEmitter<any>;
    S_SLIDECHANGETRANSITIONEND: EventEmitter<any>;
    S_SLIDECHANGETRANSITIONSTART: EventEmitter<any>;
    constructor(zone: NgZone, cdRef: ChangeDetectorRef, platformId: Object, defaults: SwiperConfigInterface);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    getConfig(): SwiperConfigInterface;
    private updateClasses;
    onPaginationClick(index: number): void;
}
