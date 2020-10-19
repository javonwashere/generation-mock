
import { css } from "frontity";

export default css`
:root {
  --coblocks-spacing--0: 0;--coblocks-spacing--1: 0.5em;--coblocks-spacing--2: 1em;--coblocks-spacing--3: 1.5em;--coblocks-spacing--4: 2em;--coblocks-spacing--5: 2.5em;--coblocks-spacing--6: 3em;--coblocks-spacing--7: 3.5em;--coblocks-spacing--8: 4em}

.has-columns {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%
}

@media (min-width: 600px) {
  .has-columns.has-2-columns>*:not(.block-editor-inner-blocks),.has-columns.has-3-columns>*:not(.block-editor-inner-blocks),.has-columns.has-4-columns>*:not(.block-editor-inner-blocks) {
      flex-basis:50%
  }
}

@media (min-width: 782px) {
  .has-columns.has-3-columns>*:not(.block-editor-inner-blocks),.has-columns.has-4-columns>*:not(.block-editor-inner-blocks) {
      flex-basis:33.33%
  }
}

@media (max-width: 959px) {
  .has-columns.has-4-columns>*:not(.block-editor-inner-blocks) {
      flex-basis:50%
  }
}

@media (min-width: 1280px) {
  .has-columns.has-4-columns>*:not(.block-editor-inner-blocks) {
      flex-basis:25%
  }
}

.alignfull .has-columns {
  padding-left: var(--coblocks-spacing--2, 1em);
  padding-right: var(--coblocks-spacing--2, 1em)
}

@media (min-width: 600px) {
  .alignfull .has-columns {
      padding-left:var(--coblocks-spacing--4, 2em);
      padding-right: var(--coblocks-spacing--4, 2em)
  }
}

@media (max-width: 599px) {
  .has-responsive-columns {
      flex-direction:column
  }

  .has-responsive-columns>* {
      max-width: 100% !important;
      width: 100% !important
  }

  .has-responsive-columns>[class*="wp-block"]:last-child {
      margin-bottom: 0
  }

  .has-responsive-columns.has-no-gutter>[class*="wp-block"]:not(:last-child) {
      margin-bottom: 0
  }

  .has-responsive-columns.has-small-gutter>[class*="wp-block"]:not(:last-child) {
      margin-bottom: calc(var(--coblocks-spacing--1, 0.5em) * 2.35)
  }

  .has-responsive-columns.has-medium-gutter>[class*="wp-block"]:not(:last-child) {
      margin-bottom: calc(var(--coblocks-spacing--2, 1em) * 2.35)
  }

  .has-responsive-columns.has-large-gutter>[class*="wp-block"]:not(:last-child) {
      margin-bottom: calc(var(--coblocks-spacing--3, 1.5em) * 2.35)
  }

  .has-responsive-columns.has-huge-gutter>[class*="wp-block"]:not(:last-child) {
      margin-bottom: calc(var(--coblocks-spacing--4, 2em) * 2.35)
  }
}

.has-small-gutter.has-2-columns>*:not(.block-editor-inner-blocks) {
  max-width: calc(100% / 2 - var(--coblocks-spacing--1, 0.5em))
}

.has-small-gutter.has-3-columns>*:not(.block-editor-inner-blocks) {
  max-width: calc(100% / 3 - var(--coblocks-spacing--2, 1em))
}

.has-small-gutter.has-4-columns>*:not(.block-editor-inner-blocks) {
  max-width: calc(100% / 2 - var(--coblocks-spacing--1, 0.5em))
}

@media (min-width: 960px) {
  .has-small-gutter.has-4-columns>*:not(.block-editor-inner-blocks) {
      max-width:calc(100% / 4 - var(--coblocks-spacing--2, 1em))
  }
}

@media (max-width: 959px) {
  .has-small-gutter.has-4-columns>*:not(.block-editor-inner-blocks):nth-of-type(1),.has-small-gutter.has-4-columns>*:not(.block-editor-inner-blocks):nth-of-type(2) {
      margin-bottom:calc(2 * var(--coblocks-spacing--1, 0.5em))
  }
}

.has-medium-gutter.has-2-columns>*:not(.block-editor-inner-blocks) {
  max-width: calc(100% / 2 - var(--coblocks-spacing--2, 1em))
}

.has-medium-gutter.has-3-columns>*:not(.block-editor-inner-blocks) {
  max-width: calc(100% / 2.975 - var(--coblocks-spacing--3, 1.5em))
}

.has-medium-gutter.has-4-columns>*:not(.block-editor-inner-blocks) {
  max-width: calc(100% / 2 - var(--coblocks-spacing--2, 1em))
}

@media (min-width: 960px) {
  .has-medium-gutter.has-4-columns>*:not(.block-editor-inner-blocks) {
      max-width:calc(100% / 4 - var(--coblocks-spacing--3, 1.5em))
  }
}

@media (max-width: 959px) {
  .has-medium-gutter.has-4-columns>*:not(.block-editor-inner-blocks):nth-of-type(1),.has-medium-gutter.has-4-columns>*:not(.block-editor-inner-blocks):nth-of-type(2) {
      margin-bottom:calc(2 * var(--coblocks-spacing--2, 1em))
  }
}

.has-large-gutter.has-2-columns>*:not(.block-editor-inner-blocks) {
  max-width: calc(100% / 2.01 - var(--coblocks-spacing--3, 1.5em))
}

.has-large-gutter.has-3-columns>*:not(.block-editor-inner-blocks) {
  max-width: calc(100% / 3.03 - var(--coblocks-spacing--4, 2em))
}

.has-large-gutter.has-4-columns>*:not(.block-editor-inner-blocks) {
  max-width: calc(100% / 2 - var(--coblocks-spacing--3, 1.5em))
}

@media (min-width: 960px) {
  .has-large-gutter.has-4-columns>*:not(.block-editor-inner-blocks) {
      max-width:calc(100% / 4.08 - var(--coblocks-spacing--4, 2em))
  }
}

@media (max-width: 959px) {
  .has-large-gutter.has-4-columns>*:not(.block-editor-inner-blocks):nth-of-type(1),.has-large-gutter.has-4-columns>*:not(.block-editor-inner-blocks):nth-of-type(2) {
      margin-bottom:calc(2 * var(--coblocks-spacing--3, 1.5em))
  }
}

.has-huge-gutter.has-2-columns>*:not(.block-editor-inner-blocks) {
  max-width: calc(100% / 2.02 - var(--coblocks-spacing--4, 2em))
}

.has-huge-gutter.has-3-columns>*:not(.block-editor-inner-blocks) {
  max-width: calc(100% / 3.09 - var(--coblocks-spacing--5, 2.5em))
}

.has-huge-gutter.has-4-columns>*:not(.block-editor-inner-blocks) {
  max-width: calc(100% / 2 - var(--coblocks-spacing--4, 2em))
}

@media (min-width: 960px) {
  .has-huge-gutter.has-4-columns>*:not(.block-editor-inner-blocks) {
      max-width:calc(100% / 4.15 - var(--coblocks-spacing--5, 2.5em))
  }
}

@media (max-width: 959px) {
  .has-huge-gutter.has-4-columns>*:not(.block-editor-inner-blocks):nth-of-type(1),.has-huge-gutter.has-4-columns>*:not(.block-editor-inner-blocks):nth-of-type(2) {
      margin-bottom:calc(2 * var(--coblocks-spacing--4, 2em))
  }
}

.bg-repeat {
  background-repeat: repeat
}

.bg-no-repeat {
  background-repeat: no-repeat
}

.bg-repeat-x {
  background-repeat: repeat-x
}

.bg-repeat-y {
  background-repeat: repeat-y
}

.bg-cover {
  background-size: cover
}

.bg-auto {
  background-size: auto
}

.bg-contain {
  background-size: contain
}

.bg-top-left {
  background-position: top left
}

.bg-top-center {
  background-position: top center
}

.bg-top-right {
  background-position: top right
}

.bg-center-left {
  background-position: center left
}

.bg-center-center {
  background-position: center center
}

.bg-center-right {
  background-position: center right
}

.bg-bottom-left {
  background-position: bottom left
}

.bg-bottom-center {
  background-position: bottom center
}

.bg-bottom-right {
  background-position: bottom right
}

.has-background-overlay {
  position: relative
}

.has-background-overlay:not(.has-background) {
  background-color: #000
}

.has-background-overlay::before {
  background-color: inherit;
  bottom: 0;
  content: "";
  left: 0;
  opacity: 0.5;
  position: absolute;
  right: 0;
  top: 0
}

.has-background-overlay-10::before {
  opacity: .1
}

.has-background-overlay-20::before {
  opacity: .2
}

.has-background-overlay-30::before {
  opacity: .3
}

.has-background-overlay-40::before {
  opacity: .4
}

.has-background-overlay-50::before {
  opacity: .5
}

.has-background-overlay-60::before {
  opacity: .6
}

.has-background-overlay-70::before {
  opacity: .7
}

.has-background-overlay-80::before {
  opacity: .8
}

.has-background-overlay-90::before {
  opacity: .9
}

.has-background-overlay-100::before {
  opacity: 1
}

.has-parallax {
  background-attachment: fixed
}

@supports (-webkit-overflow-scrolling: touch) {
  .has-parallax {
      background-attachment: scroll
  }
}

@media (prefers-reduced-motion: reduce) {
  .has-parallax {
      background-attachment: scroll
  }
}

.has-small-padding,.has-small-padding.wp-block-group,.has-small-padding.wp-block-group.has-background {
  padding-left: var(--coblocks-spacing--1, 0.5em)
}

.has-medium-padding,.has-medium-padding.wp-block-group,.has-medium-padding.wp-block-group.has-background {
  padding: var(--coblocks-spacing--2, 1em)
}

.has-large-padding,.has-large-padding.wp-block-group,.has-large-padding.wp-block-group.has-background {
  padding: var(--coblocks-spacing--3, 1.5em)
}

.has-huge-padding,.has-huge-padding.wp-block-group,.has-huge-padding.wp-block-group.has-background {
  padding: var(--coblocks-spacing--4, 2em)
}

.content-area__wrapper .has-small-padding,.content-area__wrapper .has-small-padding.wp-block-group,.content-area__wrapper .has-small-padding.wp-block-group.has-background,.editor-styles-wrapper .has-small-padding,.editor-styles-wrapper .has-small-padding.wp-block-group,.editor-styles-wrapper .has-small-padding.wp-block-group.has-background {
  padding: var(--coblocks-spacing--1, 0.5em)
}

.content-area__wrapper .has-medium-padding,.content-area__wrapper .has-medium-padding.wp-block-group,.content-area__wrapper .has-medium-padding.wp-block-group.has-background,.editor-styles-wrapper .has-medium-padding,.editor-styles-wrapper .has-medium-padding.wp-block-group,.editor-styles-wrapper .has-medium-padding.wp-block-group.has-background {
  padding: var(--coblocks-spacing--2, 1em)
}

.content-area__wrapper .has-large-padding,.content-area__wrapper .has-large-padding.wp-block-group,.content-area__wrapper .has-large-padding.wp-block-group.has-background,.editor-styles-wrapper .has-large-padding,.editor-styles-wrapper .has-large-padding.wp-block-group,.editor-styles-wrapper .has-large-padding.wp-block-group.has-background {
  padding: var(--coblocks-spacing--3, 1.5em)
}

.content-area__wrapper .has-huge-padding,.content-area__wrapper .has-huge-padding.wp-block-group,.content-area__wrapper .has-huge-padding.wp-block-group.has-background,.editor-styles-wrapper .has-huge-padding,.editor-styles-wrapper .has-huge-padding.wp-block-group,.editor-styles-wrapper .has-huge-padding.wp-block-group.has-background {
  padding: var(--coblocks-spacing--4, 2em)
}

.has-small-margin {
  margin-bottom: var(--coblocks-spacing--1, 0.5em);
  margin-top: var(--coblocks-spacing--1, 0.5em)
}

.has-medium-margin {
  margin-bottom: var(--coblocks-spacing--2, 1em);
  margin-top: var(--coblocks-spacing--2, 1em)
}

.has-large-margin {
  margin-bottom: var(--coblocks-spacing--3, 1.5em);
  margin-top: var(--coblocks-spacing--3, 1.5em)
}

.has-huge-margin {
  margin-bottom: var(--coblocks-spacing--4, 2em);
  margin-top: var(--coblocks-spacing--4, 2em)
}

.has-shadow {
  box-shadow: 0 1.5vw 3vw -0.7vw rgba(0,0,0,0.125)
}

.shadow-sm,.has-shadow-sml {
  box-shadow: 0 0.5vw 2vw -0.25vw rgba(0,0,0,0.2)
}

.shadow-md,.has-shadow-med {
  box-shadow: 0 1vw 3vw -0.5vw rgba(0,0,0,0.2)
}

.shadow-lg,.has-shadow-lrg {
  box-shadow: 0 1.8vw 3vw -0.7vw rgba(0,0,0,0.2)
}

[class*="hint--"] {
  display: inline-block;
  position: relative
}

[class*="hint--"]::before,[class*="hint--"]::after {
  opacity: 0;
  pointer-events: none;
  position: absolute;
  transform: translate3d(0, 0, 0);
  visibility: hidden;
  z-index: 1000000
}

[class*="hint--"]::before {
  background: transparent;
  border: 6px solid transparent;
  content: "";
  position: absolute;
  z-index: 1000001
}

[class*="hint--"]::after {
  background: #333;
  border-radius: 2px;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  color: #fff;
  font-family: -apple-system,"BlinkMacSystemFont","Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif;
  font-size: 12px;
  line-height: 11px;
  padding: 6px 8px 7px 9px;
  white-space: nowrap
}

[class*="hint--"]:hover::before,[class*="hint--"]:hover::after {
  opacity: 1;
  visibility: visible
}

[class*="hint--"][aria-label]::after {
  content: attr(aria-label)
}

[class*="hint--"][data-hint]::after {
  content: attr(data-hint)
}

[aria-label=""]::before,[aria-label=""]::after,[data-hint=""]::before,[data-hint=""]::after {
  display: none !important
}

.hint--top::before {
  border-top-color: #333;
  left: calc(50% - 6px) !important;
  margin-bottom: -10px
}

.hint--top::before,.hint--top::after {
  bottom: 103%;
  left: 50%
}

.hint--top::after {
  transform: translateX(-50%)
}

.hint--top:hover::after {
  transform: translateX(-50%)
}

.hint--bottom::before {
  border-bottom-color: #333;
  left: calc(50% - 10px);
  margin-top: -11px
}

.hint--bottom::before,.hint--bottom::after {
  left: 50%;
  top: 100%
}

.hint--bottom::after {
  transform: translateX(-50%)
}

.hint--bottom:hover::before {
  transform: translateY(8px)
}

.hint--bottom:hover::after {
  transform: translateX(-50%) translateY(8px)
}

.ui-datepicker.coblocks {
  background-color: #fff;
  border: 1px solid #dfdfdf;
  border-radius: 0;
  border-top: none;
  box-shadow: 0 3px 6px rgba(0,0,0,0.075);
  margin: 0;
  padding: 0;
  width: auto
}

.ui-datepicker.coblocks * {
  border-radius: 0;
  padding: 0
}

.ui-datepicker.coblocks table {
  border: none;
  border-collapse: collapse;
  margin: 0;
  width: auto
}

.ui-datepicker.coblocks .ui-widget-header,.ui-datepicker.coblocks .ui-datepicker-header {
  background-image: none;
  border: none;
  font-weight: 400
}

.ui-datepicker.coblocks .ui-datepicker-header .ui-state-hover {
  background: transparent;
  border-color: transparent;
  cursor: pointer
}

.ui-datepicker.coblocks .ui-datepicker-title {
  font-size: 14px;
  line-height: 14px;
  margin: 0;
  padding: 10px 0;
  text-align: center
}

.ui-datepicker.coblocks .ui-datepicker-prev,.ui-datepicker.coblocks .ui-datepicker-next {
  height: 34px;
  position: relative;
  top: 0;
  width: 34px
}

.ui-datepicker.coblocks .ui-datepicker-prev,.ui-datepicker.coblocks .ui-datepicker-prev-hover {
  left: 0
}

.ui-datepicker.coblocks .ui-datepicker-next,.ui-datepicker.coblocks .ui-datepicker-next-hover {
  right: 0
}

.ui-datepicker.coblocks .ui-datepicker-next span,.ui-datepicker.coblocks .ui-datepicker-prev span {
  display: none
}

.ui-datepicker.coblocks .ui-state-hover .ui-datepicker-prev,.ui-datepicker.coblocks .ui-state-hover .ui-datepicker-next {
  border: none
}

.ui-datepicker.coblocks .ui-datepicker-prev {
  float: left
}

.ui-datepicker.coblocks .ui-datepicker-next {
  float: right
}

.ui-datepicker.coblocks .ui-datepicker-prev::before,.ui-datepicker.coblocks .ui-datepicker-next::before {
  font: 400 20px/34px "dashicons";
  height: 34px;
  padding-left: 7px;
  speak: none;
  width: 34px
}

.ui-datepicker.coblocks .ui-datepicker-prev::before {
  content: "\f341"
}

.ui-datepicker.coblocks .ui-datepicker-next::before {
  content: "\f345"
}

.ui-datepicker.coblocks .ui-datepicker-prev-hover::before,.ui-datepicker.coblocks .ui-datepicker-next-hover::before {
  opacity: 0.7
}

.ui-datepicker.coblocks select.ui-datepicker-month,.ui-datepicker.coblocks select.ui-datepicker-year {
  width: 33%
}

.ui-datepicker.coblocks thead {
  font-weight: 600
}

.ui-datepicker.coblocks th {
  border-width: 1px;
  padding: 10px
}

.ui-datepicker.coblocks td {
  border: 1px solid #f4f4f4;
  padding: 0
}

.ui-datepicker.coblocks td.ui-datepicker-other-month {
  border: transparent
}

.ui-datepicker.coblocks td.ui-datepicker-week-end {
  background-color: #f4f4f4;
  border: 1px solid #f4f4f4
}

.ui-datepicker.coblocks td.ui-datepicker-today {
  background-color: #f0f0c0
}

.ui-datepicker.coblocks td.ui-datepicker-current-day {
  background: #bd8
}

.ui-datepicker.coblocks td .ui-state-default {
  background: transparent;
  border: none;
  color: #444;
  display: block;
  font-weight: 400;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  width: auto
}

.ui-datepicker.coblocks td.ui-state-disabled .ui-state-default {
  opacity: 0.5
}

.has-background-video {
  position: relative
}

.has-background-video.has-background-overlay::before {
  z-index: 1
}

.has-background-video.has-background-overlay>:not(.coblocks-video-bg) {
  z-index: 10
}

.has-background-video>:not(.coblocks-video-bg) {
  position: relative
}

.coblocks-video-bg {
  bottom: 0;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%
}

.coblocks-video-bg>video {
  background-position: center center;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: 50% 50%;
  object-position: 50% 50%;
  width: 100%
}

.coblocks-gallery {
  list-style: none !important;
  padding-left: 0;
  padding-right: 0
}

.coblocks-gallery--item {
  list-style: none !important;
  margin: 0;
  padding: 0 !important
}

.coblocks-gallery--item figure {
  position: relative
}

.coblocks-gallery--item img {
  opacity: 1;
  vertical-align: middle
}

.coblocks-gallery .coblocks-gallery--item figcaption {
  color: inherit;
  margin: 0 !important
}

.coblocks-gallery.is-cropped .coblocks-gallery--item a,.coblocks-gallery.is-cropped .coblocks-gallery--item img,.coblocks-gallery.is-cropped .coblocks-gallery--item-thumbnail a,.coblocks-gallery.is-cropped .coblocks-gallery--item-thumbnail img {
  width: 100%
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .coblocks-gallery.is-cropped .coblocks-gallery--item a,.coblocks-gallery.is-cropped .coblocks-gallery--item img,.coblocks-gallery.is-cropped .coblocks-gallery--item-thumbnail a,.coblocks-gallery.is-cropped .coblocks-gallery--item-thumbnail img {
      flex:1;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover
  }
}

.alignfull ul.coblocks-gallery,.alignwide ul.coblocks-gallery {
  max-width: 100%
}

.coblocks-gallery--item-thumbnail {
  list-style: none !important;
  margin: 0;
  padding: 0
}

.coblocks-gallery--item-thumbnail figure {
  margin: 0;
  position: relative
}

.coblocks-gallery--item-thumbnail img {
  vertical-align: middle
}

figcaption.coblocks-gallery--primary-caption {
  font-size: 13px;
  margin-bottom: 1em;
  margin-top: 1.2em;
  text-align: center
}

figcaption.coblocks-gallery--primary-caption:not(.has-caption-color) {
  color: #555d66
}

.wp-block-group div[class*="wp-block-coblocks-gallery"] {
  margin-bottom: 10px !important;
  margin-top: 10px !important
}

@media (min-width: 250px) {
  .has-grid-sml .coblocks-gallery--item {
      width:50%
  }
}

@media (min-width: 500px) {
  .has-grid-sml .coblocks-gallery--item {
      width:33.33333%
  }
}

@media (min-width: 800px) {
  .has-grid-sml .coblocks-gallery--item {
      width:25%
  }
}

@media (min-width: 1300px) {
  .has-grid-sml .coblocks-gallery--item {
      width:20%
  }
}

@media (min-width: 1700px) {
  .has-grid-sml .coblocks-gallery--item {
      width:16.66667%
  }
}

@media (min-width: 1900px) {
  .has-grid-sml .coblocks-gallery--item {
      width:14.28571%
  }
}

@media (min-width: 350px) {
  .has-grid-med .coblocks-gallery--item {
      width:50%
  }
}

@media (min-width: 650px) {
  .has-grid-med .coblocks-gallery--item {
      width:33.33333%
  }
}

@media (min-width: 1100px) {
  .has-grid-med .coblocks-gallery--item {
      width:25%
  }
}

@media (min-width: 1600px) {
  .alignfull .has-grid-med .coblocks-gallery--item {
      width:20%
  }
}

@media (min-width: 1900px) {
  .alignfull .has-grid-med .coblocks-gallery--item {
      width:16.66667%
  }
}

@media (min-width: 400px) {
  .has-grid-lrg .coblocks-gallery--item {
      width:50%
  }
}

@media (min-width: 800px) {
  .has-grid-lrg .coblocks-gallery--item {
      width:33.33333%
  }
}

@media (min-width: 1600px) {
  .alignfull .has-grid-lrg .coblocks-gallery--item {
      width:25%
  }
}

@media (min-width: 1900px) {
  .alignfull .has-grid-lrg .coblocks-gallery--item {
      width:20%
  }
}

@media (min-width: 400px) {
  .has-grid-xlrg .coblocks-gallery--item {
      width:50%
  }
}

@media (min-width: 1600px) {
  .alignfull .has-grid-xlrg .coblocks-gallery--item {
      width:33.33333%
  }
}

@media (min-width: 1900px) {
  .alignfull .has-grid-xlrg .coblocks-gallery--item {
      width:25%
  }
}

@media (min-width: 400px) {
  .has-no-alignment .has-grid-lrg .coblocks-gallery--item {
      width:50%
  }
}

@media (min-width: 900px) {
  .has-no-alignment .has-grid-lrg .coblocks-gallery--item {
      width:33.33333%
  }
}

.coblocks-gallery.has-gutter {
  overflow: hidden
}

@media (min-width: 600px) {
  .has-gutter-5 {
      margin:-3px !important;
      max-width: calc(100% + 5px) !important
  }

  .has-gutter-10 {
      margin: -5px !important;
      max-width: calc(100% + 10px) !important
  }

  .has-gutter-15 {
      margin: -8px !important;
      max-width: calc(100% + 15px) !important
  }

  .has-gutter-20 {
      margin: -10px !important;
      max-width: calc(100% + 20px) !important
  }

  .has-gutter-25 {
      margin: -13px !important;
      max-width: calc(100% + 25px) !important
  }

  .has-gutter-30 {
      margin: -15px !important;
      max-width: calc(100% + 30px) !important
  }

  .has-gutter-35 {
      margin: -18px !important;
      max-width: calc(100% + 35px) !important
  }

  .has-gutter-40 {
      margin: -20px !important;
      max-width: calc(100% + 40px) !important
  }

  .has-gutter-45 {
      margin: -23px !important;
      max-width: calc(100% + 45px) !important
  }

  .has-gutter-50 {
      margin: -25px !important;
      max-width: calc(100% + 50px) !important
  }

  .has-gutter-5 .coblocks-gallery--figure {
      margin: 3px
  }

  .has-gutter-10 .coblocks-gallery--figure {
      margin: 5px
  }

  .has-gutter-15 .coblocks-gallery--figure {
      margin: 8px
  }

  .has-gutter-20 .coblocks-gallery--figure {
      margin: 10px
  }

  .has-gutter-25 .coblocks-gallery--figure {
      margin: 13px
  }

  .has-gutter-30 .coblocks-gallery--figure {
      margin: 15px
  }

  .has-gutter-35 .coblocks-gallery--figure {
      margin: 18px
  }

  .has-gutter-40 .coblocks-gallery--figure {
      margin: 20px
  }

  .has-gutter-45 .coblocks-gallery--figure {
      margin: 23px
  }

  .has-gutter-50 .coblocks-gallery--figure {
      margin: 25px
  }
}

@media (max-width: 599px) {
  .has-gutter-mobile-5 {
      margin:-3px !important;
      max-width: calc(100% + 5px) !important
  }

  .has-gutter-mobile-5 .coblocks-gallery--figure {
      margin: 3px
  }

  .has-gutter-mobile-10 {
      margin: -5px !important;
      max-width: calc(100% + 10px) !important
  }

  .has-gutter-mobile-10 .coblocks-gallery--figure {
      margin: 5px
  }

  .has-gutter-mobile-15 {
      margin: -8px !important;
      max-width: calc(100% + 15px) !important
  }

  .has-gutter-mobile-15 .coblocks-gallery--figure {
      margin: 8px
  }

  .has-gutter-mobile-20 {
      margin: -10px !important;
      max-width: calc(100% + 20px) !important
  }

  .has-gutter-mobile-20 .coblocks-gallery--figure {
      margin: 10px
  }

  .has-gutter-mobile-25 {
      margin: -13px !important;
      max-width: calc(100% + 25px) !important
  }

  .has-gutter-mobile-25 .coblocks-gallery--figure {
      margin: 13px
  }

  .has-gutter-mobile-30 {
      margin: -15px !important;
      max-width: calc(100% + 30px) !important
  }

  .has-gutter-mobile-30 .coblocks-gallery--figure {
      margin: 15px
  }

  .has-gutter-mobile-35 {
      margin: -18px !important;
      max-width: calc(100% + 35px) !important
  }

  .has-gutter-mobile-35 .coblocks-gallery--figure {
      margin: 18px
  }

  .has-gutter-mobile-40 {
      margin: -20px !important;
      max-width: calc(100% + 40px) !important
  }

  .has-gutter-mobile-40 .coblocks-gallery--figure {
      margin: 20px
  }

  .has-gutter-mobile-45 {
      margin: -23px !important;
      max-width: calc(100% + 45px) !important
  }

  .has-gutter-mobile-45 .coblocks-gallery--figure {
      margin: 23px
  }

  .has-gutter-mobile-50 {
      margin: -25px !important;
      max-width: calc(100% + 50px) !important
  }

  .has-gutter-mobile-50 .coblocks-gallery--figure {
      margin: 25px
  }
}

.has-horizontal-gutter {
  overflow-x: hidden
}

.wp-block-coblocks-gallery-carousel .coblocks-gallery--item,.wp-block-coblocks-gallery-thumbnails .coblocks-gallery--item {
  height: 100%;
  margin: 0 !important
}

@media (min-width: 1300px) {
  .has-no-alignment .has-carousel-lrg .coblocks-gallery--item {
      width:70%
  }
}

.has-no-alignment .has-carousel-xlrg .coblocks-gallery--item {
  width: 100%
}

.has-carousel-sml .coblocks-gallery--item {
  width: 65%
}

@media (min-width: 700px) {
  .has-carousel-sml .coblocks-gallery--item {
      width:33.333%
  }
}

@media (min-width: 1100px) {
  .has-carousel-sml .coblocks-gallery--item {
      width:25%
  }
}

@media (min-width: 1600px) {
  .has-carousel-sml .coblocks-gallery--item {
      width:20%
  }
}

.has-carousel-sml.has-aligned-cells .coblocks-gallery--item {
  width: 100%
}

@media (min-width: 700px) {
  .has-carousel-sml.has-aligned-cells .coblocks-gallery--item {
      width:33.333%
  }
}

@media (min-width: 1100px) {
  .has-carousel-sml.has-aligned-cells .coblocks-gallery--item {
      width:25%
  }
}

@media (min-width: 1600px) {
  .has-carousel-sml.has-aligned-cells .coblocks-gallery--item {
      width:20%
  }
}

.has-carousel-med .coblocks-gallery--item {
  width: 70%
}

@media (min-width: 700px) {
  .has-carousel-med .coblocks-gallery--item {
      width:33.333%
  }
}

@media (min-width: 1800px) {
  .has-carousel-med .coblocks-gallery--item {
      width:25%
  }
}

.has-carousel-med.has-aligned-cells .coblocks-gallery--item {
  width: 100%
}

@media (min-width: 600px) {
  .has-carousel-med.has-aligned-cells .coblocks-gallery--item {
      width:50%
  }
}

@media (min-width: 900px) {
  .has-carousel-med.has-aligned-cells .coblocks-gallery--item {
      width:33.333%
  }
}

@media (min-width: 1200px) {
  .has-carousel-med.has-aligned-cells .coblocks-gallery--item {
      width:25%
  }
}

.has-carousel-lrg .coblocks-gallery--item {
  width: 80%
}

@media (min-width: 600px) {
  .has-carousel-lrg .coblocks-gallery--item {
      width:70%
  }
}

@media (min-width: 1300px) {
  .has-carousel-lrg .coblocks-gallery--item {
      width:60%
  }
}

.has-carousel-lrg.has-aligned-cells .coblocks-gallery--item {
  width: 100%
}

@media (min-width: 600px) {
  .has-carousel-lrg.has-aligned-cells .coblocks-gallery--item {
      width:50%
  }
}

@media (min-width: 1800px) {
  .has-carousel-lrg.has-aligned-cells .coblocks-gallery--item {
      width:33.333%
  }
}

.has-carousel-xlrg .coblocks-gallery--item {
  width: 100%
}

@media (min-width: 1200px) {
  .has-carousel-xlrg .coblocks-gallery--item {
      width:80%
  }
}

.has-carousel-xlrg.has-aligned-cells .coblocks-gallery--item {
  width: 100%
}

@media (min-width: 600px) {
  .has-margin-bottom-5 {
      margin-bottom:5px !important
  }

  .has-margin-bottom-10 {
      margin-bottom: 10px !important
  }

  .has-margin-bottom-15 {
      margin-bottom: 15px !important
  }

  .has-margin-bottom-20 {
      margin-bottom: 20px !important
  }

  .has-margin-bottom-25 {
      margin-bottom: 25px !important
  }

  .has-margin-bottom-30 {
      margin-bottom: 30px !important
  }

  .has-margin-bottom-35 {
      margin-bottom: 35px !important
  }

  .has-margin-bottom-40 {
      margin-bottom: 40px !important
  }

  .has-margin-bottom-45 {
      margin-bottom: 45px !important
  }

  .has-margin-bottom-50 {
      margin-bottom: 50px !important
  }
}

@media (max-width: 599px) {
  .has-margin-bottom-mobile-5 {
      margin-bottom:5px !important
  }

  .has-margin-bottom-mobile-10 {
      margin-bottom: 10px !important
  }

  .has-margin-bottom-mobile-15 {
      margin-bottom: 15px !important
  }

  .has-margin-bottom-mobile-20 {
      margin-bottom: 20px !important
  }

  .has-margin-bottom-mobile-25 {
      margin-bottom: 25px !important
  }

  .has-margin-bottom-mobile-30 {
      margin-bottom: 30px !important
  }

  .has-margin-bottom-mobile-35 {
      margin-bottom: 35px !important
  }

  .has-margin-bottom-mobile-40 {
      margin-bottom: 40px !important
  }

  .has-margin-bottom-mobile-45 {
      margin-bottom: 45px !important
  }

  .has-margin-bottom-mobile-50 {
      margin-bottom: 50px !important
  }
}

@media (min-width: 600px) {
  .has-margin-top-5 {
      margin-top:3px !important
  }

  .has-margin-top-10 {
      margin-top: 5px !important
  }

  .has-margin-top-15 {
      margin-top: 8px !important
  }

  .has-margin-top-20 {
      margin-top: 10px !important
  }

  .has-margin-top-25 {
      margin-top: 13px !important
  }

  .has-margin-top-30 {
      margin-top: 15px !important
  }

  .has-margin-top-35 {
      margin-top: 18px !important
  }

  .has-margin-top-40 {
      margin-top: 20px !important
  }

  .has-margin-top-45 {
      margin-top: 23px !important
  }

  .has-margin-top-50 {
      margin-top: 25px !important
  }
}

@media (max-width: 599px) {
  .has-margin-top-mobile-5 {
      margin-top:3px !important
  }

  .has-margin-top-mobile-10 {
      margin-top: 5px !important
  }

  .has-margin-top-mobile-15 {
      margin-top: 8px !important
  }

  .has-margin-top-mobile-20 {
      margin-top: 10px !important
  }

  .has-margin-top-mobile-25 {
      margin-top: 13px !important
  }

  .has-margin-top-mobile-30 {
      margin-top: 15px !important
  }

  .has-margin-top-mobile-35 {
      margin-top: 18px !important
  }

  .has-margin-top-mobile-40 {
      margin-top: 20px !important
  }

  .has-margin-top-mobile-45 {
      margin-top: 23px !important
  }

  .has-margin-top-mobile-50 {
      margin-top: 25px !important
  }
}

@media (min-width: 600px) {
  .has-margin-right-5 {
      margin-right:3px !important
  }

  .has-margin-right-10 {
      margin-right: 5px !important
  }

  .has-margin-right-15 {
      margin-right: 8px !important
  }

  .has-margin-right-20 {
      margin-right: 10px !important
  }

  .has-margin-right-25 {
      margin-right: 13px !important
  }

  .has-margin-right-30 {
      margin-right: 15px !important
  }

  .has-margin-right-35 {
      margin-right: 18px !important
  }

  .has-margin-right-40 {
      margin-right: 20px !important
  }

  .has-margin-right-45 {
      margin-right: 23px !important
  }

  .has-margin-right-50 {
      margin-right: 25px !important
  }
}

@media (max-width: 599px) {
  .has-margin-right-mobile-5 {
      margin-right:3px !important
  }

  .has-margin-right-mobile-10 {
      margin-right: 5px !important
  }

  .has-margin-right-mobile-15 {
      margin-right: 8px !important
  }

  .has-margin-right-mobile-20 {
      margin-right: 10px !important
  }

  .has-margin-right-mobile-25 {
      margin-right: 13px !important
  }

  .has-margin-right-mobile-30 {
      margin-right: 15px !important
  }

  .has-margin-right-mobile-35 {
      margin-right: 18px !important
  }

  .has-margin-right-mobile-40 {
      margin-right: 20px !important
  }

  .has-margin-right-mobile-45 {
      margin-right: 23px !important
  }

  .has-margin-right-mobile-50 {
      margin-right: 25px !important
  }
}

@media (min-width: 600px) {
  .has-margin-left-5 {
      margin-left:3px !important
  }

  .has-margin-left-10 {
      margin-left: 5px !important
  }

  .has-margin-left-15 {
      margin-left: 8px !important
  }

  .has-margin-left-20 {
      margin-left: 10px !important
  }

  .has-margin-left-25 {
      margin-left: 13px !important
  }

  .has-margin-left-30 {
      margin-left: 15px !important
  }

  .has-margin-left-35 {
      margin-left: 18px !important
  }

  .has-margin-left-40 {
      margin-left: 20px !important
  }

  .has-margin-left-45 {
      margin-left: 23px !important
  }

  .has-margin-left-50 {
      margin-left: 25px !important
  }
}

@media (max-width: 599px) {
  .has-margin-left-mobile-5 {
      margin-left:3px !important
  }

  .has-margin-left-mobile-10 {
      margin-left: 5px !important
  }

  .has-margin-left-mobile-15 {
      margin-left: 8px !important
  }

  .has-margin-left-mobile-20 {
      margin-left: 10px !important
  }

  .has-margin-left-mobile-25 {
      margin-left: 13px !important
  }

  .has-margin-left-mobile-30 {
      margin-left: 15px !important
  }

  .has-margin-left-mobile-35 {
      margin-left: 18px !important
  }

  .has-margin-left-mobile-40 {
      margin-left: 20px !important
  }

  .has-margin-left-mobile-45 {
      margin-left: 23px !important
  }

  .has-margin-left-mobile-50 {
      margin-left: 25px !important
  }
}

@media (min-width: 600px) {
  .has-negative-margin-right-5 {
      margin-right:-3px !important
  }

  .has-negative-margin-right-10 {
      margin-right: -5px !important
  }

  .has-negative-margin-right-15 {
      margin-right: -8px !important
  }

  .has-negative-margin-right-20 {
      margin-right: -10px !important
  }

  .has-negative-margin-right-25 {
      margin-right: -13px !important
  }

  .has-negative-margin-right-30 {
      margin-right: -15px !important
  }

  .has-negative-margin-right-35 {
      margin-right: -18px !important
  }

  .has-negative-margin-right-40 {
      margin-right: -20px !important
  }

  .has-negative-margin-right-45 {
      margin-right: -23px !important
  }

  .has-negative-margin-right-50 {
      margin-right: -25px !important
  }
}

@media (max-width: 599px) {
  .has-negative-margin-right-mobile-5 {
      margin-right:-3px !important
  }

  .has-negative-margin-right-mobile-10 {
      margin-right: -5px !important
  }

  .has-negative-margin-right-mobile-15 {
      margin-right: -8px !important
  }

  .has-negative-margin-right-mobile-20 {
      margin-right: -10px !important
  }

  .has-negative-margin-right-mobile-25 {
      margin-right: -13px !important
  }

  .has-negative-margin-right-mobile-30 {
      margin-right: -15px !important
  }

  .has-negative-margin-right-mobile-35 {
      margin-right: -18px !important
  }

  .has-negative-margin-right-mobile-40 {
      margin-right: -20px !important
  }

  .has-negative-margin-right-mobile-45 {
      margin-right: -23px !important
  }

  .has-negative-margin-right-mobile-50 {
      margin-right: -25px !important
  }
}

@media (min-width: 600px) {
  .has-negative-margin-left-5 {
      margin-left:-3px !important
  }

  .has-negative-margin-left-10 {
      margin-left: -5px !important
  }

  .has-negative-margin-left-15 {
      margin-left: -8px !important
  }

  .has-negative-margin-left-20 {
      margin-left: -10px !important
  }

  .has-negative-margin-left-25 {
      margin-left: -13px !important
  }

  .has-negative-margin-left-30 {
      margin-left: -15px !important
  }

  .has-negative-margin-left-35 {
      margin-left: -18px !important
  }

  .has-negative-margin-left-40 {
      margin-left: -20px !important
  }

  .has-negative-margin-left-45 {
      margin-left: -23px !important
  }

  .has-negative-margin-left-50 {
      margin-left: -25px !important
  }
}

@media (max-width: 599px) {
  .has-negative-margin-left-mobile-5 {
      margin-left:-3px !important
  }

  .has-negative-margin-left-mobile-10 {
      margin-left: -5px !important
  }

  .has-negative-margin-left-mobile-15 {
      margin-left: -8px !important
  }

  .has-negative-margin-left-mobile-20 {
      margin-left: -10px !important
  }

  .has-negative-margin-left-mobile-25 {
      margin-left: -13px !important
  }

  .has-negative-margin-left-mobile-30 {
      margin-left: -15px !important
  }

  .has-negative-margin-left-mobile-35 {
      margin-left: -18px !important
  }

  .has-negative-margin-left-mobile-40 {
      margin-left: -20px !important
  }

  .has-negative-margin-left-mobile-45 {
      margin-left: -23px !important
  }

  .has-negative-margin-left-mobile-50 {
      margin-left: -25px !important
  }
}

@media (min-width: 600px) {
  .has-negative-margin-5 {
      margin:-3px !important
  }

  .has-negative-margin-10 {
      margin: -5px !important
  }

  .has-negative-margin-15 {
      margin: -8px !important
  }

  .has-negative-margin-20 {
      margin: -10px !important
  }

  .has-negative-margin-25 {
      margin: -13px !important
  }

  .has-negative-margin-30 {
      margin: -15px !important
  }

  .has-negative-margin-35 {
      margin: -18px !important
  }

  .has-negative-margin-40 {
      margin: -20px !important
  }

  .has-negative-margin-45 {
      margin: -23px !important
  }

  .has-negative-margin-50 {
      margin: -25px !important
  }
}

@media (max-width: 599px) {
  .has-negative-margin-mobile-5 {
      margin:-3px !important
  }

  .has-negative-margin-mobile-10 {
      margin: -5px !important
  }

  .has-negative-margin-mobile-15 {
      margin: -8px !important
  }

  .has-negative-margin-mobile-20 {
      margin: -10px !important
  }

  .has-negative-margin-mobile-25 {
      margin: -13px !important
  }

  .has-negative-margin-mobile-30 {
      margin: -15px !important
  }

  .has-negative-margin-mobile-35 {
      margin: -18px !important
  }

  .has-negative-margin-mobile-40 {
      margin: -20px !important
  }

  .has-negative-margin-mobile-45 {
      margin: -23px !important
  }

  .has-negative-margin-mobile-50 {
      margin: -25px !important
  }
}

@media (min-width: 600px) {
  .has-padding-5 {
      padding:5px !important
  }

  .has-padding-10 {
      padding: 10px !important
  }

  .has-padding-15 {
      padding: 15px !important
  }

  .has-padding-20 {
      padding: 20px !important
  }

  .has-padding-25 {
      padding: 25px !important
  }

  .has-padding-30 {
      padding: 30px !important
  }

  .has-padding-35 {
      padding: 35px !important
  }

  .has-padding-40 {
      padding: 40px !important
  }

  .has-padding-45 {
      padding: 45px !important
  }

  .has-padding-50 {
      padding: 50px !important
  }

  .has-padding-55 {
      padding: 55px !important
  }

  .has-padding-60 {
      padding: 60px !important
  }

  .has-padding-65 {
      padding: 65px !important
  }

  .has-padding-70 {
      padding: 70px !important
  }

  .has-padding-75 {
      padding: 75px !important
  }

  .has-padding-80 {
      padding: 80px !important
  }

  .has-padding-85 {
      padding: 85px !important
  }

  .has-padding-90 {
      padding: 90px !important
  }

  .has-padding-95 {
      padding: 95px !important
  }

  .has-padding-100 {
      padding: 100px !important
  }
}

@media (max-width: 599px) {
  .has-padding-mobile-5 {
      padding:5px !important
  }

  .has-padding-mobile-10 {
      padding: 10px !important
  }

  .has-padding-mobile-15 {
      padding: 15px !important
  }

  .has-padding-mobile-20 {
      padding: 20px !important
  }

  .has-padding-mobile-25 {
      padding: 25px !important
  }

  .has-padding-mobile-30 {
      padding: 30px !important
  }

  .has-padding-mobile-35 {
      padding: 35px !important
  }

  .has-padding-mobile-40 {
      padding: 40px !important
  }

  .has-padding-mobile-45 {
      padding: 45px !important
  }

  .has-padding-mobile-50 {
      padding: 50px !important
  }

  .has-padding-mobile-55 {
      padding: 55px !important
  }

  .has-padding-mobile-60 {
      padding: 60px !important
  }

  .has-padding-mobile-65 {
      padding: 65px !important
  }

  .has-padding-mobile-70 {
      padding: 70px !important
  }

  .has-padding-mobile-75 {
      padding: 75px !important
  }

  .has-padding-mobile-80 {
      padding: 80px !important
  }

  .has-padding-mobile-85 {
      padding: 85px !important
  }

  .has-padding-mobile-90 {
      padding: 90px !important
  }

  .has-padding-mobile-95 {
      padding: 95px !important
  }

  .has-padding-mobile-100 {
      padding: 100px !important
  }
}

.has-border-radius-2 .coblocks-gallery--item img {
  border-radius: 2px
}

.has-border-radius-2 .coblocks-gallery--item figcaption {
  border-radius: 0 0 2px 2px
}

.has-border-radius-3 .coblocks-gallery--item img {
  border-radius: 3px
}

.has-border-radius-3 .coblocks-gallery--item figcaption {
  border-radius: 0 0 3px 3px
}

.has-border-radius-4 .coblocks-gallery--item img {
  border-radius: 4px
}

.has-border-radius-4 .coblocks-gallery--item figcaption {
  border-radius: 0 0 4px 4px
}

.has-border-radius-5 .coblocks-gallery--item img {
  border-radius: 5px
}

.has-border-radius-5 .coblocks-gallery--item figcaption {
  border-radius: 0 0 5px 5px
}

.has-border-radius-6 .coblocks-gallery--item img {
  border-radius: 6px
}

.has-border-radius-6 .coblocks-gallery--item figcaption {
  border-radius: 0 0 6px 6px
}

.has-border-radius-7 .coblocks-gallery--item img {
  border-radius: 7px
}

.has-border-radius-7 .coblocks-gallery--item figcaption {
  border-radius: 0 0 7px 7px
}

.has-border-radius-8 .coblocks-gallery--item img {
  border-radius: 8px
}

.has-border-radius-8 .coblocks-gallery--item figcaption {
  border-radius: 0 0 8px 8px
}

.has-border-radius-9 .coblocks-gallery--item img {
  border-radius: 9px
}

.has-border-radius-9 .coblocks-gallery--item figcaption {
  border-radius: 0 0 9px 9px
}

.has-border-radius-10 .coblocks-gallery--item img {
  border-radius: 10px
}

.has-border-radius-10 .coblocks-gallery--item figcaption {
  border-radius: 0 0 10px 10px
}

.has-border-radius-11 .coblocks-gallery--item img {
  border-radius: 11px
}

.has-border-radius-11 .coblocks-gallery--item figcaption {
  border-radius: 0 0 11px 11px
}

.has-border-radius-12 .coblocks-gallery--item img {
  border-radius: 12px
}

.has-border-radius-12 .coblocks-gallery--item figcaption {
  border-radius: 0 0 12px 12px
}

.has-border-radius-13 .coblocks-gallery--item img {
  border-radius: 13px
}

.has-border-radius-13 .coblocks-gallery--item figcaption {
  border-radius: 0 0 13px 13px
}

.has-border-radius-14 .coblocks-gallery--item img {
  border-radius: 14px
}

.has-border-radius-14 .coblocks-gallery--item figcaption {
  border-radius: 0 0 14px 14px
}

.has-border-radius-15 .coblocks-gallery--item img {
  border-radius: 15px
}

.has-border-radius-15 .coblocks-gallery--item figcaption {
  border-radius: 0 0 15px 15px
}

.has-border-radius-16 .coblocks-gallery--item img {
  border-radius: 16px
}

.has-border-radius-16 .coblocks-gallery--item figcaption {
  border-radius: 0 0 16px 16px
}

.has-border-radius-17 .coblocks-gallery--item img {
  border-radius: 17px
}

.has-border-radius-17 .coblocks-gallery--item figcaption {
  border-radius: 0 0 17px 17px
}

.has-border-radius-18 .coblocks-gallery--item img {
  border-radius: 18px
}

.has-border-radius-18 .coblocks-gallery--item figcaption {
  border-radius: 0 0 18px 18px
}

.has-border-radius-19 .coblocks-gallery--item img {
  border-radius: 19px
}

.has-border-radius-19 .coblocks-gallery--item figcaption {
  border-radius: 0 0 19px 19px
}

.has-border-radius-20 .coblocks-gallery--item img {
  border-radius: 20px
}

.has-border-radius-20 .coblocks-gallery--item figcaption {
  border-radius: 0 0 20px 20px
}

.has-caption-style-light .coblocks-gallery--item figcaption {
  background: linear-gradient(0deg, rgba(255,255,255,0.93) 6.3%, rgba(255,255,255,0.5) 61%, rgba(255,255,255,0)) !important;
  opacity: 1 !important
}

.coblocks-gallery:not(.has-caption-color).has-caption-style-dark figcaption {
  color: #fff
}

.coblocks-gallery:not(.has-caption-color).has-caption-style-light figcaption {
  color: #000
}

.has-caption-style-none .coblocks-gallery--item {
  background: none !important;
  opacity: 1 !important
}

.flickity-enabled {
  position: relative
}

.flickity-enabled:focus {
  outline: none
}

.flickity-enabled.is-draggable {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
}

.flickity-viewport {
  height: 100%;
  overflow: hidden;
  position: relative
}

.is-cropped .flickity-viewport {
  height: 100% !important
}

.flickity-slider {
  height: 100%;
  position: absolute;
  width: 100%
}

.flickity-enabled.is-draggable .flickity-viewport {
  cursor: -webkit-grab;
  cursor: grab
}

.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
  cursor: -webkit-grabbing;
  cursor: grabbing
}

.flickity-button {
  background: rgba(255,255,255,0.75);
  border: none;
  color: #000;
  padding: 0;
  position: absolute;
  transition: background 100ms, opacity 100ms
}

.flickity-button:hover {
  background: #fff;
  cursor: pointer
}

.flickity-button:focus {
  background: #fff;
  border: none;
  box-shadow: 0 0 0 2px #000;
  outline: none
}

.flickity-button:active {
  border: none;
  opacity: 0.6
}

.flickity-button:disabled {
  cursor: auto;
  opacity: 0.25;
  pointer-events: none
}

.flickity-button-icon {
  fill: #000;
  transform: translate3d(0, 0, 0)
}

.flickity-prev-next-button {
  border-radius: 9px;
  height: 72px;
  top: 50%;
  transform: translateY(-50%);
  width: 57px
}

.has-top-left-carousel-arrows .flickity-prev-next-button {
  border-radius: 4px;
  height: 42px;
  top: 20px;
  transform: none;
  width: 42px
}

.has-top-left-carousel-arrows .flickity-prev-next-button.previous {
  left: 20px
}

.has-top-left-carousel-arrows .flickity-prev-next-button.next {
  left: calc(25px + 42px)
}

.flickity-prev-next-button.previous {
  left: 10px
}

@media (min-width: 600px) {
  .flickity-prev-next-button.previous {
      left:20px
  }
}

.flickity-prev-next-button.next {
  right: 10px
}

@media (min-width: 600px) {
  .flickity-prev-next-button.next {
      right:20px
  }
}

.flickity-rtl .flickity-prev-next-button.previous {
  left: auto;
  right: 10px
}

@media (min-width: 600px) {
  .flickity-rtl .flickity-prev-next-button.previous {
      right:20px
  }
}

.flickity-rtl .flickity-prev-next-button.next {
  left: 10px;
  right: auto
}

@media (min-width: 600px) {
  .flickity-rtl .flickity-prev-next-button.next {
      left:20px
  }
}

.flickity-prev-next-button .flickity-button-icon {
  height: 50%;
  left: 23%;
  position: absolute;
  top: 25%;
  width: 50%
}

.previous.flickity-prev-next-button .flickity-button-icon {
  left: 26%
}

.flickity-page-dots {
  bottom: 18px;
  line-height: 1;
  list-style: none;
  margin: 0 !important;
  padding: 0 !important;
  position: absolute;
  text-align: center;
  width: 100%
}

.flickity-rtl .flickity-page-dots {
  direction: rtl
}

.flickity-page-dots .dot {
  background: rgba(0,0,0,0.3);
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  height: 9px;
  margin: 0 6px;
  width: 9px
}

.flickity-page-dots .dot.is-selected {
  background: rgba(255,255,255,0.75)
}

.coblocks-lightbox {
  align-items: center;
  background: rgba(0,0,0,0);
  display: none;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999
}

.admin-bar .coblocks-lightbox {
  top: 32px
}

@media (max-width: 782px) {
  .admin-bar .coblocks-lightbox {
      top:46px
  }
}

.coblocks-lightbox__background {
  background-repeat: no-repeat;
  background-size: cover;
  bottom: -10em;
  -webkit-filter: blur(25px) saturate(175%) brightness(90%);
  filter: blur(25px) saturate(175%) brightness(90%);
  left: -10em;
  position: absolute;
  right: -10em;
  top: -10em
}

.coblocks-lightbox__heading {
  align-items: center;
  color: #fff;
  display: flex;
  font-family: -apple-system,"BlinkMacSystemFont","Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif;
  font-size: 0.5em;
  justify-content: space-between;
  left: 3%;
  position: absolute;
  right: 3%;
  top: 1em
}

@media (min-width: 600px) {
  .coblocks-lightbox__heading {
      top:2em
  }
}

.coblocks-lightbox__image {
  z-index: 2
}

.coblocks-lightbox__image img {
  max-height: 70vh;
  max-width: 70vw
}

@media (min-width: 960px) {
  .coblocks-lightbox__image img {
      max-height:80vh;
      max-width: 80vw
  }
}

.coblocks-lightbox__arrow {
  align-items: center;
  background-color: transparent;
  border-radius: 100%;
  color: #fff;
  cursor: pointer;
  display: flex;
  height: auto;
  margin: 0 1%;
  padding: 15px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: 250ms background-color linear;
  z-index: 3
}

.coblocks-lightbox__arrow:hover {
  background-color: rgba(255,255,255,0.15)
}

.coblocks-lightbox__arrow:focus {
  background-color: rgba(255,255,255,0.25);
  box-shadow: inset 0 0 0 3px rgba(255,255,255,0.25);
  outline: none
}

@media (min-width: 600px) {
  .coblocks-lightbox__arrow {
      background-color:rgba(255,255,255,0.15);
      margin: 0 2%
  }

  .coblocks-lightbox__arrow:hover {
      background-color: rgba(255,255,255,0.25)
  }
}

.coblocks-lightbox__arrow>div {
  background-color: #fff;
  height: 28px;
  position: relative;
  width: 28px
}

@media (min-width: 960px) {
  .coblocks-lightbox__arrow>div {
      height:32px;
      width: 32px
  }
}

.coblocks-lightbox__arrow .arrow-left {
  left: -1px;
  -webkit-mask-image: url(images/lightbox/arrow-left.svg);
  mask-image: url(images/lightbox/arrow-left.svg)
}

.coblocks-lightbox__arrow .arrow-right {
  -webkit-mask-image: url(images/lightbox/arrow-right.svg);
  mask-image: url(images/lightbox/arrow-right.svg);
  right: -1px
}

.coblocks-lightbox__arrow--left {
  left: 0;
  right: auto
}

.coblocks-lightbox__close {
  background-color: #fff;
  background-repeat: no-repeat;
  cursor: pointer;
  height: 26px;
  -webkit-mask-image: url(images/lightbox/close.svg);
  mask-image: url(images/lightbox/close.svg);
  -webkit-mask-size: contain;
  mask-size: contain;
  padding: 7px;
  transition: transform 0.15s linear;
  width: 26px
}

@media (min-width: 960px) {
  .coblocks-lightbox__close {
      height:32px;
      width: 32px
  }
}

.coblocks-lightbox__close:hover {
  background-color: #fff;
  transform: scale(1.125)
}

.coblocks-lightbox__close:focus {
  background-color: #fff;
  transform: scale(1.125)
}

.coblocks-lightbox__caption {
  color: #ffffff;
  text-align: center;
  margin-top: 10px
}

.has-lightbox>:not(.carousel-nav) figure:hover {
  cursor: zoom-in
}

figure.has-lightbox:hover {
  cursor: zoom-in
}

.is-twentynineteen .entry-content div[class*="wp-block-coblocks-gallery"] {
  margin-bottom: 46px;
  margin-top: 46px
}

.is-twentynineteen .entry-content div[class*="wp-block-coblocks-gallery"] .coblocks-gallery--caption {
  font-family: -apple-system,"BlinkMacSystemFont","Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif;
  font-size: 0.71111em;
  line-height: 1.6;
  margin: 0 0 -20px;
  padding: 0.5rem;
  text-align: center
}

.is-twentynineteen .wp-block-coblocks-gallery-stacked figcaption:not([class*="font-size"]) {
  font-size: 0.71111em
}

.is-twentyseventeen .entry-content div[class*="wp-block-coblocks-gallery"] {
  margin-bottom: 1.75em;
  margin-top: 1.65em
}

.is-twentyseventeen .entry-content div[class*="wp-block-coblocks-gallery"] .coblocks-gallery--primary-caption {
  font-style: italic;
  margin-bottom: -10px;
  margin-top: 1em
}

.is-twentyseventeen .entry-content div[class*="wp-block-coblocks-gallery"]:not([class*="masonry"]) .coblocks-gallery:not(.has-caption-color) figcaption {
  color: #555d66
}

.is-twentyseventeen .wp-block-coblocks-gallery-masonry figcaption {
  padding-bottom: 6px
}

.is-twentysixteen .entry-content div[class*="wp-block-coblocks-gallery"] {
  margin-bottom: 2.3em;
  margin-top: 2.3em
}

.is-twentysixteen .entry-content div[class*="wp-block-coblocks-gallery"] .coblocks-gallery--primary-caption {
  margin-bottom: -10px;
  margin-top: 0.6em
}

.is-twentysixteen .wp-block-coblocks-gallery-masonry figcaption {
  padding-bottom: 6px
}

.is-twentyfifteen .entry-content div[class*="wp-block-coblocks-gallery"] {
  margin-bottom: 2.2em;
  margin-top: 2.2em
}

.is-twentyfifteen .entry-content div[class*="wp-block-coblocks-gallery"] .coblocks-gallery--primary-caption {
  margin-bottom: -15px;
  margin-top: 0.5em;
  padding-bottom: 0
}

.is-twentyfifteen .wp-block-coblocks-gallery-masonry figcaption {
  font-size: 13px !important
}

.is-twentyfourteen .entry-content div[class*="wp-block-coblocks-gallery"] {
  margin-bottom: 30px;
  margin-top: 30px
}

.is-twentyfourteen .entry-content div[class*="wp-block-coblocks-gallery"] .coblocks-gallery--primary-caption {
  margin-bottom: -7px;
  text-align: left
}

.is-twentythirteen .entry-content div[class*="wp-block-coblocks-gallery"] {
  margin-bottom: 30px;
  margin-top: 34px
}

.is-twentythirteen .entry-content div[class*="wp-block-coblocks-gallery"] .coblocks-gallery--primary-caption {
  margin-bottom: -10px
}

.is-twentythirteen .wp-block-coblocks-gallery-masonry figcaption {
  font-size: 13px !important
}

.is-twentytwelve .entry-content div[class*="wp-block-coblocks-gallery"] {
  margin-bottom: 32px;
  margin-top: 32px
}

.is-twentytwelve .entry-content div[class*="wp-block-coblocks-gallery"] .coblocks-gallery:not([class*="border-radius"]) img {
  border-radius: inherit
}

.is-twentytwelve .entry-content div[class*="wp-block-coblocks-gallery"] .coblocks-gallery--primary-caption {
  margin-bottom: -10px
}

.is-twentytwelve .wp-block-coblocks-gallery-masonry figcaption {
  padding-bottom: 6px
}

.is-twentyeleven .entry-content div[class*="wp-block-coblocks-gallery"] {
  margin-bottom: 32px;
  margin-top: 33px
}

.is-twentyeleven .entry-content div[class*="wp-block-coblocks-gallery"] .coblocks-gallery img {
  border: 0;
  max-width: 100%;
  padding: 0
}

.is-twentyeleven .entry-content div[class*="wp-block-coblocks-gallery"] .coblocks-gallery--primary-caption {
  margin-bottom: -15px
}

.is-twentyeleven .entry-content div[class*="wp-block-coblocks-gallery"] .coblocks-gallery--primary-caption::before {
  color: #666;
  content: "\2014";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  left: 10px;
  margin-right: 5px;
  position: absolute;
  top: 0
}

.is-twentyeleven .wp-block-coblocks-gallery-stacked figcaption {
  padding-left: 1em !important;
  padding-right: 1em !important;
  text-align: center !important
}

.is-twentyeleven .wp-block-coblocks-gallery-stacked figcaption::before {
  display: none;
  padding-left: 0
}

.has-filter-grayscale img {
  -webkit-filter: grayscale(1);
  filter: grayscale(1)
}

.has-filter-saturation img {
  -webkit-filter: saturate(1.75);
  filter: saturate(1.75)
}

.has-filter-sepia img {
  -webkit-filter: sepia(0.5);
  filter: sepia(0.5)
}

.has-filter-dim img {
  -webkit-filter: brightness(0.5);
  filter: brightness(0.5)
}

.has-filter-vintage img {
  -webkit-filter: contrast(1.3) saturate(1.5) sepia(0.6);
  filter: contrast(1.3) saturate(1.5) sepia(0.6)
}

[class*="wp-block-"].mt-0>.has-margin {
  margin-top: 0 !important
}

[class*="wp-block-"].mb-0>.has-margin {
  margin-bottom: 0 !important
}

[class*="wp-block"].mt-0 {
  margin-top: 0 !important
}

[class*="wp-block"].mb-0 {
  margin-bottom: 0 !important
}

.mt-0 {
  margin-top: 0
}

.pt-0 {
  padding-top: 0
}

.wp-block-button.w-100 {
  width: 100%
}

.wp-block-button.w-100 .wp-block-button__link {
  width: 100%
}

.is-style-circular .wp-block-button__link {
  border-radius: 100px !important
}

.is-style-3d .wp-block-button__link {
  box-shadow: inset 0 -3px 0 0 rgba(0,0,0,0.25)
}

.is-style-shadow {
  z-index: 1
}

.is-style-shadow .wp-block-button__link {
  box-shadow: 0 4px 6px rgba(0,0,0,0.11),0 1px 3px rgba(0,0,0,0.075)
}

@media (min-width: 600px) {
  .coblocks-modal__content {
      max-width:310px
  }
}

.coblocks-modal__content .components-base-control__help {
  color: #555d66;
  display: block;
  font-style: normal;
  padding-left: 37px;
  padding-top: 2px
}

@media (min-width: 600px) {
  .coblocks-modal__content .components-base-control__help {
      padding-left:28px
  }
}

.wp-block-cover:not(.components-placeholder).is-style-bottom-wave {
  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg width="250" height="248" xmlns="http://www.w3.org/2000/svg"><path d="M250 220.092145s-12.873712-8.581631-26.547345-11.208661c-13.673633-2.62703-19.948005-2.014057-25.847415-1.094596-14.723528 2.276759-29.197081 7.662171-48.145186 21.760565-7.399261 5.341628-19.223078 13.485421-25.122488 15.630829-5.999399 2.145408-13.223677 3.415139-18.873112 2.320543-2.574743-.437838-5.6494355-.612974-12.4487556-3.371355-6.8743126-2.62703-14.6235377-7.049197-19.9230076-10.595688-10.2989701-6.874062-23.6976303-9.501092-33.4966504-9.807579C17.9982002 222.806743 0 237.080273 0 237.080273V0h250z"/></svg>');
  mask-image: url('data:image/svg+xml;utf8,<svg width="250" height="248" xmlns="http://www.w3.org/2000/svg"><path d="M250 220.092145s-12.873712-8.581631-26.547345-11.208661c-13.673633-2.62703-19.948005-2.014057-25.847415-1.094596-14.723528 2.276759-29.197081 7.662171-48.145186 21.760565-7.399261 5.341628-19.223078 13.485421-25.122488 15.630829-5.999399 2.145408-13.223677 3.415139-18.873112 2.320543-2.574743-.437838-5.6494355-.612974-12.4487556-3.371355-6.8743126-2.62703-14.6235377-7.049197-19.9230076-10.595688-10.2989701-6.874062-23.6976303-9.501092-33.4966504-9.807579C17.9982002 222.806743 0 237.080273 0 237.080273V0h250z"/></svg>');
  -webkit-mask-position: bottom;
  mask-position: bottom;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: cover;
  mask-size: cover
}

.wp-block-cover:not(.components-placeholder).is-style-top-wave {
  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg width="250" height="250" xmlns="http://www.w3.org/2000/svg"><path d="M0 29.809587s12.873712 8.581631 26.547345 11.208661c13.673633 2.62703 19.948005 2.014057 25.847415 1.094596 14.723528-2.276759 29.197081-7.662171 48.145186-21.760565 7.399261-5.341628 19.223078-13.485421 25.122488-15.630829 5.999399-2.145408 13.223677-3.415139 18.873112-2.320543 2.574743.437838 5.6494355.612974 12.4487556 3.371355 6.8743126 2.62703 14.6235377 7.049197 19.9230076 10.595688 10.2989701 6.874062 23.6976303 9.501092 33.4966504 9.807579C232.0017998 27.094989 250 12.821459 250 12.821459v237.080273H0z"/></svg>');
  mask-image: url('data:image/svg+xml;utf8,<svg width="250" height="250" xmlns="http://www.w3.org/2000/svg"><path d="M0 29.809587s12.873712 8.581631 26.547345 11.208661c13.673633 2.62703 19.948005 2.014057 25.847415 1.094596 14.723528-2.276759 29.197081-7.662171 48.145186-21.760565 7.399261-5.341628 19.223078-13.485421 25.122488-15.630829 5.999399-2.145408 13.223677-3.415139 18.873112-2.320543 2.574743.437838 5.6494355.612974 12.4487556 3.371355 6.8743126 2.62703 14.6235377 7.049197 19.9230076 10.595688 10.2989701 6.874062 23.6976303 9.501092 33.4966504 9.807579C232.0017998 27.094989 250 12.821459 250 12.821459v237.080273H0z"/></svg>');
  -webkit-mask-position: top;
  mask-position: top;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: cover;
  mask-size: cover
}

.is-style-bottom-wave img {
  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg width="250" height="248" xmlns="http://www.w3.org/2000/svg"><path d="M250 220.092145s-12.873712-8.581631-26.547345-11.208661c-13.673633-2.62703-19.948005-2.014057-25.847415-1.094596-14.723528 2.276759-29.197081 7.662171-48.145186 21.760565-7.399261 5.341628-19.223078 13.485421-25.122488 15.630829-5.999399 2.145408-13.223677 3.415139-18.873112 2.320543-2.574743-.437838-5.6494355-.612974-12.4487556-3.371355-6.8743126-2.62703-14.6235377-7.049197-19.9230076-10.595688-10.2989701-6.874062-23.6976303-9.501092-33.4966504-9.807579C17.9982002 222.806743 0 237.080273 0 237.080273V0h250z"/></svg>');
  mask-image: url('data:image/svg+xml;utf8,<svg width="250" height="248" xmlns="http://www.w3.org/2000/svg"><path d="M250 220.092145s-12.873712-8.581631-26.547345-11.208661c-13.673633-2.62703-19.948005-2.014057-25.847415-1.094596-14.723528 2.276759-29.197081 7.662171-48.145186 21.760565-7.399261 5.341628-19.223078 13.485421-25.122488 15.630829-5.999399 2.145408-13.223677 3.415139-18.873112 2.320543-2.574743-.437838-5.6494355-.612974-12.4487556-3.371355-6.8743126-2.62703-14.6235377-7.049197-19.9230076-10.595688-10.2989701-6.874062-23.6976303-9.501092-33.4966504-9.807579C17.9982002 222.806743 0 237.080273 0 237.080273V0h250z"/></svg>');
  -webkit-mask-position: bottom;
  mask-position: bottom;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: cover;
  mask-size: cover
}

.is-style-top-wave img {
  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg width="250" height="250" xmlns="http://www.w3.org/2000/svg"><path d="M0 29.809587s12.873712 8.581631 26.547345 11.208661c13.673633 2.62703 19.948005 2.014057 25.847415 1.094596 14.723528-2.276759 29.197081-7.662171 48.145186-21.760565 7.399261-5.341628 19.223078-13.485421 25.122488-15.630829 5.999399-2.145408 13.223677-3.415139 18.873112-2.320543 2.574743.437838 5.6494355.612974 12.4487556 3.371355 6.8743126 2.62703 14.6235377 7.049197 19.9230076 10.595688 10.2989701 6.874062 23.6976303 9.501092 33.4966504 9.807579C232.0017998 27.094989 250 12.821459 250 12.821459v237.080273H0z"/></svg>');
  mask-image: url('data:image/svg+xml;utf8,<svg width="250" height="250" xmlns="http://www.w3.org/2000/svg"><path d="M0 29.809587s12.873712 8.581631 26.547345 11.208661c13.673633 2.62703 19.948005 2.014057 25.847415 1.094596 14.723528-2.276759 29.197081-7.662171 48.145186-21.760565 7.399261-5.341628 19.223078-13.485421 25.122488-15.630829 5.999399-2.145408 13.223677-3.415139 18.873112-2.320543 2.574743.437838 5.6494355.612974 12.4487556 3.371355 6.8743126 2.62703 14.6235377 7.049197 19.9230076 10.595688 10.2989701 6.874062 23.6976303 9.501092 33.4966504 9.807579C232.0017998 27.094989 250 12.821459 250 12.821459v237.080273H0z"/></svg>');
  -webkit-mask-position: top;
  mask-position: top;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: cover;
  mask-size: cover
}

.block-editor-block-styles__item-preview .wp-block-image {
  margin-top: 0
}

.block-editor-block-styles__item-preview .wp-block-image .components-resizable-box__container {
  height: 100% !important;
  width: 100% !important
}

.edit-post-sidebar .components-panel__body.is-opened ~ .coblocks-lightbox-controls {
  margin-top: -8px;
  padding-left: 16px;
  padding-right: 16px
}

.edit-post-sidebar .components-panel__body.is-opened ~ .coblocks-lightbox-controls ~ .components-coblocks-replace-image {
  margin-top: 0
}

.is-style-checkbox li {
  list-style-type: none !important;
  padding-left: 10px;
  position: relative
}

@media (min-width: 600px) {
  .is-style-checkbox li {
      padding-left:12px
  }
}

.is-style-checkbox li::before {
  background-color: currentColor;
  background-size: cover;
  content: "";
  display: inline-block;
  height: 20px;
  left: -20px;
  -webkit-mask-image: url(images/list/checkbox-rounded.svg);
  mask-image: url(images/list/checkbox-rounded.svg);
  position: absolute;
  top: 6px;
  transform: scale(0.9);
  width: 20px
}

@media (min-width: 600px) {
  .is-style-checkbox li::before {
      top:8px;
      transform: 0
  }
}

.is-style-checkbox li li::before {
  -webkit-mask-image: url(images/list/checkbox-rounded-child.svg);
  mask-image: url(images/list/checkbox-rounded-child.svg)
}

.is-twentynineteen .is-style-checkbox li::before {
  top: 10px
}

.is-style-none,.is-style-none li {
  list-style-type: none !important;
  padding-left: 0 !important
}

.is-style-none li::before {
  content: "\200B"
}

.edit-post-sidebar .components-coblocks-replace-image {
  display: none
}

.edit-post-sidebar .components-panel__body.is-opened ~ .components-coblocks-replace-image {
  display: flex;
  justify-content: flex-end;
  padding: 0 16px 16px 16px;
  margin-top: -8px
}

.edit-post-sidebar .edit-post-settings-sidebar__panel-block .is-opened ~ .components-coblocks-replace-image {
  display: flex;
  justify-content: flex-end;
  padding: 0 0 16px 0;
  margin-top: -8px
}

ul.has-custom-font li {
  font-family: inherit
}

blockquote.has-custom-font p,blockquote.has-custom-font cite {
  font-family: inherit !important
}

.has-custom-font.wp-block-cover p {
  font-family: inherit !important
}

.has-custom-font.wp-block-button .wp-block-button__link {
  font-family: inherit !important
}

.has-custom-font.wp-block-coblocks-click-to-tweet .wp-block-coblocks-click-to-tweet__text {
  font-family: inherit
}

.has-custom-font.wp-block-coblocks-pricing-table .wp-block-coblocks-pricing-table__inner .wp-block-coblocks-pricing-table-item__title,.has-custom-font.wp-block-coblocks-pricing-table .wp-block-coblocks-pricing-table__inner .wp-block-coblocks-pricing-table-item__amount {
  font-family: inherit
}

.wp-block-button.has-custom-lineheight .wp-block-button__link {
  line-height: inherit
}

.wp-block-button.has-custom-size .wp-block-button__link {
  font-size: inherit
}

ul.has-custom-lineheight li {
  line-height: inherit
}

ul.has-custom-size li {
  font-size: inherit
}

.has-custom-transform.wp-block-coblocks-click-to-tweet .wp-block-coblocks-click-to-tweet__twitter-btn {
  text-transform: none
}

.wp-block-coblocks-accordion-item {
  border-radius: 4px;
  margin: 0 0 1em
}

.wp-block-coblocks-accordion-item p:first-of-type {
  margin-top: 0
}

.wp-block-coblocks-accordion-item p:last-of-type {
  margin-bottom: 0
}

.wp-block-coblocks-accordion-item__title {
  background: rgba(140,140,151,0.1);
  border-radius: 4px;
  padding: 10px 15px;
  position: relative
}

.wp-block-coblocks-accordion-item__title::after {
  border-radius: 4px;
  bottom: 0;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: background 100ms cubic-bezier(0.694, 0, 0.335, 1)
}

.wp-block-coblocks-accordion-item__title:hover::after {
  background: rgba(0,0,0,0.0275)
}

.wp-block-coblocks-accordion-item__title:focus {
  outline: 1px dotted #a2aab2;
  outline-offset: -4px
}

.wp-block-coblocks-accordion-item details[open] summary {
  border-radius: 4px 4px 0 0
}

.wp-block-coblocks-accordion-item__content {
  border: 1px solid rgba(140,140,151,0.1);
  border-radius: 0 0 4px 4px;
  border-top: 0;
  padding: 15px 20px
}

.wp-block-coblocks-accordion-item__content>div {
  max-width: 100%
}

.wp-block-coblocks-accordion-item .alignfull img {
  max-width: 100% !important
}

.wp-block-coblocks-accordion.alignfull {
  padding: 0 12px
}

_:-ms-fullscreen,:root .wp-block-coblocks-accordion summary {
  display: block
}

_:-ms-lang(x),_:-webkit-full-screen,.wp-block-coblocks-accordion summary {
  display: block
}

.wp-block-coblocks-alert {
  background-color: var(--coblocks-alert-default--color--background, #d6efee);
  border-radius: 4px;
  color: var(--coblocks-alert-default--color--text, #094264);
  padding: 2em
}

.wp-block-coblocks-alert:not(.has-background).is-style-warning {
  background-color: var(--coblocks-alert-default--color--background, #fbe7dd)
}

.wp-block-coblocks-alert:not(.has-background).is-style-error {
  background-color: var(--coblocks-alert-default--color--background, #ffdede)
}

.wp-block-coblocks-alert:not(.has-background).is-style-success {
  background-color: var(--coblocks-alert-default--color--background, #d0eac4)
}

.wp-block-coblocks-alert:not(.has-text-color).is-style-warning {
  color: var(--coblocks-alert-warning--color--text, #8a4b30)
}

.wp-block-coblocks-alert:not(.has-text-color).is-style-error {
  color: var(--coblocks-alert-error--color--text, #8b343c)
}

.wp-block-coblocks-alert:not(.has-text-color).is-style-success {
  color: var(--coblocks-alert-error--color--text, #154a28)
}

.wp-block-coblocks-alert__title {
  display: block;
  margin-bottom: 0.5em;
  margin-top: 0
}

.wp-block-coblocks-alert__title:empty {
  display: none
}

.wp-block-coblocks-alert__text {
  margin-bottom: 0;
  margin-top: 0
}

.wp-block-coblocks-author {
  align-items: flex-start;
  background: rgba(139,139,150,0.1);
  display: flex;
  padding: 30px 25px;
  position: relative
}

@media (min-width: 600px) {
  .wp-block-coblocks-author {
      padding:40px 35px
  }
}

.wp-block-coblocks-author__avatar,.wp-block-coblocks-author figure.wp-block-coblocks-author__avatar {
  border-radius: 100%;
  flex: 0 0 auto;
  height: 70px;
  margin: 0 25px 0 0;
  position: relative;
  width: 70px
}

@media (min-width: 600px) {
  .wp-block-coblocks-author__avatar,.wp-block-coblocks-author figure.wp-block-coblocks-author__avatar {
      height:150px;
      margin-right: 35px;
      width: 150px
  }
}

.wp-block-coblocks-author__avatar-img {
  border-radius: 100%;
  display: inline-block;
  height: 100% !important;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  top: 0;
  vertical-align: middle;
  width: 100%
}

.wp-block-coblocks-author__content {
  flex: 1 1 auto
}

.wp-block-coblocks-author__name {
  display: block;
  font-size: 1.5em;
  margin: 0;
  padding: 0
}

.wp-block-coblocks-author__biography {
  margin: 0 0 1em
}

.wp-block-coblocks-author__biography:last-of-type {
  margin-bottom: 0
}

.wp-block-coblocks-author .wp-block-button {
  margin: 1em 0 0 0
}

.wp-block-coblocks-buttons__inner {
  align-items: center;
  display: flex;
  justify-content: center
}

.wp-block-coblocks-buttons .flex-align-left {
  align-items: flex-start;
  justify-content: flex-start
}

.wp-block-coblocks-buttons .flex-align-right {
  align-items: flex-end;
  justify-content: flex-end
}

.wp-block-coblocks-buttons .wp-block-button {
  margin-bottom: 0
}

.wp-block-coblocks-buttons .wp-block-button+.wp-block-button {
  margin-left: 1.35em
}

@media (max-width: 600px) {
  .wp-block-coblocks-buttons .is-stacked-on-mobile {
      display:block
  }

  .wp-block-coblocks-buttons .is-stacked-on-mobile .wp-block-button+.wp-block-button {
      margin-left: 0;
      margin-top: 1.35em
  }
}

.wp-block-coblocks-click-to-tweet {
  border-radius: 4px;
  margin-bottom: 1.9em;
  position: relative;
  border: 1px solid transparent
}

.wp-block-coblocks-click-to-tweet__text {
  margin-bottom: 0;
  padding-left: 40px;
  position: relative
}

.wp-block-coblocks-click-to-tweet__text::before {
  background-color: currentColor;
  background-size: cover;
  content: "";
  display: inline-block;
  height: 24px;
  left: 0;
  -webkit-mask-image: url(images/social/twitter.svg);
  mask-image: url(images/social/twitter.svg);
  opacity: 0.3;
  position: absolute;
  top: 5px;
  width: 24px
}

.wp-block-coblocks-click-to-tweet__text a {
  box-shadow: none !important;
  text-decoration: none !important
}

.wp-block-coblocks-click-to-tweet__twitter-btn {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 4px;
  border: none;
  box-shadow: none !important;
  color: #fff !important;
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.8;
  margin-left: 40px;
  margin-top: 10px;
  padding: 0.28em 1em;
  position: relative;
  text-decoration: none !important;
  white-space: normal;
  word-break: break-all
}

.wp-block-coblocks-click-to-tweet__twitter-btn:not(.has-button-color) {
  background: var(--coblocks--color--twitter, #1da1f2)
}

.wp-block-coblocks-click-to-tweet__twitter-btn::before {
  background-color: #fff;
  background-size: cover;
  content: "";
  display: inline-block;
  height: 18px;
  margin-right: 5px;
  -webkit-mask-image: url(images/social/twitter.svg);
  mask-image: url(images/social/twitter.svg);
  position: relative;
  top: 4px;
  width: 18px
}

.wp-block-coblocks-dynamic-separator {
  background: none !important;
  border: 0;
  max-width: 100% !important;
  opacity: 1;
  padding: 0;
  position: relative;
  width: 100%
}

.wp-block-coblocks-dynamic-separator::before {
  content: "...";
  display: inline-block;
  font-size: 22px;
  font-weight: 400;
  left: 0;
  letter-spacing: 0.95em;
  line-height: 1;
  margin-left: 21px;
  margin-right: auto;
  position: absolute;
  right: 0;
  text-align: center;
  top: calc(50% - 18px)
}

.wp-block-coblocks-dynamic-separator.is-style-line::before,.wp-block-coblocks-dynamic-separator.is-style-fullwidth::before {
  background: currentColor;
  content: "";
  display: block;
  height: 1px;
  margin-left: auto;
  max-width: 120px;
  top: 50%;
  width: 15vw
}

.wp-block-coblocks-dynamic-separator.is-style-fullwidth::before {
  max-width: 100%;
  width: 100%
}

.wp-block-coblocks-dynamic-separator:not(.has-background)::before {
  color: #292929
}

.wp-block-coblocks-dynamic-separator.is-style-line:not(.has-background)::before,.wp-block-coblocks-dynamic-separator.is-style-fullwidth:not(.has-background)::before {
  background: rgba(0,0,0,0.15)
}

.is-twentytwenty .entry-content hr.wp-block-coblocks-dynamic-separator::before {
  background: none;
  content: "...";
  left: 0;
  top: calc(50% - 18px);
  transform: none;
  width: auto
}

.is-twentytwenty .entry-content hr.wp-block-coblocks-dynamic-separator::after {
  display: none
}

.is-twentytwenty .entry-content hr.wp-block-coblocks-dynamic-separator.is-style-line::before,.is-twentytwenty .entry-content hr.wp-block-coblocks-dynamic-separator.is-style-fullwidth::before {
  background: currentColor;
  content: "";
  display: block;
  height: 1px;
  margin-left: auto;
  max-width: 120px;
  top: 50%;
  width: 15vw
}

.is-twentytwenty .entry-content hr.wp-block-coblocks-dynamic-separator.is-style-fullwidth::before {
  max-width: 100%;
  width: 100%
}

.is-twentytwenty .wp-block-coblocks-dynamic-separator.is-style-line:not(.has-background)::before,.is-twentytwenty .wp-block-coblocks-dynamic-separator.is-style-fullwidth:not(.has-background)::before {
  background: #6d6d6d
}

.wp-block-coblocks-event-item {
  flex: 1 100%;
  justify-content: space-between;
  line-height: 1;
  margin-bottom: var(--coblocks-spacing--5, 2.5em);
  width: 100%
}

@media (min-width: 782px) {
  .wp-block-coblocks-event-item {
      display:flex !important;
      margin-bottom: var(--coblocks-spacing--3, 1.5em)
  }
}

.wp-block-coblocks-events__date {
  margin-bottom: var(--coblocks-spacing--3, 1.5em)
}

@media (min-width: 782px) {
  .wp-block-coblocks-events__date {
      flex-basis:15%;
      margin-bottom: 0
  }
}

.wp-block-coblocks-events__content {
  margin-bottom: var(--coblocks-spacing--3, 1.5em)
}

@media (min-width: 782px) {
  .wp-block-coblocks-events__content {
      flex-basis:65%;
      margin-bottom: 0;
      padding: 0 1em
  }
}

.wp-block-coblocks-events__title,.wp-block-coblocks-events__description,.wp-block-coblocks-events__time {
  display: block
}

@media (min-width: 782px) {
  .wp-block-coblocks-events__details {
      flex-basis:20%;
      text-align: right
  }
}

.wp-block-coblocks-events__title {
  font-weight: 700;
  margin-bottom: var(--coblocks-spacing--1, 0.5em)
}

.wp-block-coblocks-events__day {
  display: block;
  font-size: 1.75em;
  font-weight: 700;
  margin-bottom: 5px
}

.wp-block-coblocks-events__month {
  margin-right: 5px;
  margin-top: var(--coblocks-spacing--1, 0.5em)
}

@media (min-width: 782px) {
  .wp-block-coblocks-events__month {
      display:block;
      margin-bottom: 5px;
      margin-right: 0
  }
}

.wp-block-coblocks-events__time {
  font-weight: 700;
  margin-bottom: var(--coblocks-spacing--1, 0.5em)
}

.wp-block-coblocks-events__year,.wp-block-coblocks-events__month,.wp-block-coblocks-events__time,.wp-block-coblocks-events__location,.wp-block-coblocks-events__description {
  font-size: 0.75em
}

.wp-block-coblocks-events__description {
  line-height: 1.476
}

.wp-block-coblocks-events.slick-slider {
  box-sizing: border-box;
  display: block;
  padding-bottom: 4em;
  position: relative;
  touch-action: pan-y;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
}

.wp-block-coblocks-events .slick-list {
  display: block;
  margin: 0 -2em;
  overflow: hidden;
  padding: 0;
  position: relative
}

.wp-block-coblocks-events .slick-list:focus {
  outline: none
}

.wp-block-coblocks-events .slick-list.dragging {
  cursor: pointer;
  cursor: hand
}

.wp-block-coblocks-events.slick-slider .slick-track,.wp-block-coblocks-events.slick-slider .slick-list {
  transform: translate3d(0, 0, 0)
}

.wp-block-coblocks-events .slick-track {
  display: flex;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 0
}

.wp-block-coblocks-events .slick-track::before,.wp-block-coblocks-events .slick-track::after {
  content: "";
  display: table
}

.wp-block-coblocks-events .slick-track::after {
  clear: both
}

.wp-block-coblocks-events .slick-loading .slick-track {
  visibility: hidden
}

.wp-block-coblocks-events .slick-slide {
  float: left;
  height: auto;
  margin: 0 2em;
  min-height: 1px;
  outline: none
}

.wp-block-coblocks-events [dir="rtl"] .slick-slide {
  float: right
}

.wp-block-coblocks-events .slick-slide img {
  display: block
}

.wp-block-coblocks-events .slick-slide.slick-loading img {
  display: none
}

.wp-block-coblocks-events .slick-slide.dragging img {
  pointer-events: none
}

.wp-block-coblocks-events .slick-initialized .slick-slide {
  display: block
}

.wp-block-coblocks-events .slick-loading .slick-slide {
  visibility: hidden
}

.wp-block-coblocks-events .slick-vertical .slick-slide {
  border: 1px solid transparent;
  display: block;
  height: auto
}

.wp-block-coblocks-events .slick-arrow.slick-hidden {
  display: none
}

.wp-block-coblocks-events .arrows {
  text-align: center
}

.wp-block-coblocks-events .slick-prev,.wp-block-coblocks-events .slick-next {
  background: transparent;
  border: none;
  bottom: 0;
  color: transparent;
  cursor: pointer;
  display: inline-block;
  font-size: initial;
  height: 4em;
  line-height: 0;
  outline: none;
  padding: 0.5em;
  position: absolute;
  width: 4em;
  z-index: 1
}

.wp-block-coblocks-events .slick-prev:hover,.wp-block-coblocks-events .slick-prev:focus,.wp-block-coblocks-events .slick-next:hover,.wp-block-coblocks-events .slick-next:focus {
  cursor: pointer;
  opacity: 0.5;
  outline: none
}

.wp-block-coblocks-events .slick-prev:hover::before,.wp-block-coblocks-events .slick-prev:focus::before,.wp-block-coblocks-events .slick-next:hover::before,.wp-block-coblocks-events .slick-next:focus::before {
  opacity: 1
}

.wp-block-coblocks-events .slick-prev {
  left: 50%;
  transform: translateX(-100%)
}

.wp-block-coblocks-events .slick-next {
  right: 50%;
  transform: translateX(100%)
}

.wp-block-coblocks-events .slick-prev.slick-disabled::before,.wp-block-coblocks-events .slick-next.slick-disabled::before {
  opacity: 0.25
}

.wp-block-coblocks-events .slick-prev::before,.wp-block-coblocks-events .slick-next::before {
  background-image: url(images/lightbox/arrow-left.svg);
  background-position: center;
  background-repeat: no-repeat;
  content: " ";
  display: block;
  height: 100%;
  width: 100%
}

.wp-block-coblocks-events .slick-next::before {
  background-image: url(images/lightbox/arrow-right.svg)
}

.wp-block-coblocks-events [dir="rtl"] .slick-prev::before {
  background-image: url(images/lightbox/arrow-right.svg)
}

.wp-block-coblocks-events [dir="rtl"] .slick-next::before {
  background-image: url(images/lightbox/arrow-left.svg)
}

.wp-block-coblocks-features {
  position: relative
}

.wp-block-coblocks-features .has-left-content {
  text-align: left
}

.wp-block-coblocks-features .has-left-content img {
  margin-left: 0;
  margin-right: auto
}

.wp-block-coblocks-features .has-center-content {
  text-align: center
}

.wp-block-coblocks-features .has-center-content img {
  margin-left: auto;
  margin-right: auto
}

.wp-block-coblocks-features .has-right-content {
  text-align: right
}

.wp-block-coblocks-features .has-right-content img {
  margin-left: auto;
  margin-right: 0
}

.wp-block-coblocks-features__inner {
  position: relative
}

.wp-block-coblocks-feature {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  max-width: 100%;
  position: relative;
  width: 100%;
  word-break: break-word
}

.wp-block-coblocks-feature .wp-block-coblocks-icon {
  margin-bottom: var(--coblocks-spacing--3, 1.5em)
}

.wp-block-coblocks-feature h1,.wp-block-coblocks-feature h2,.wp-block-coblocks-feature h3,.wp-block-coblocks-feature h4,.wp-block-coblocks-feature h5,.wp-block-coblocks-feature h6 {
  margin-top: 0 !important;
  padding: 0 !important
}

.wp-block-coblocks-feature p {
  margin-top: 0
}

.wp-block-coblocks-feature p:not(.has-background) {
  padding-top: 0
}

.wp-block-coblocks-feature__inner>* {
  position: relative
}

.wp-block-coblocks-feature__inner>*:last-child {
  margin-bottom: 0 !important
}

@media (min-width: 600px) {
  .wp-block-coblocks-features__inner:not(.has-responsive-columns) {
      align-items:flex-start;
      display: flex
  }
}

@media (min-width: 600px) {
  .wp-block-coblocks-features__inner[class*="gutter"]:not(.has-responsive-columns) .wp-block-coblocks-feature:nth-child(odd) {
      margin-right:var(--coblocks-spacing--3, 1.5em)
  }

  .wp-block-coblocks-features__inner[class*="gutter"]:not(.has-responsive-columns) .wp-block-coblocks-feature:nth-child(even) {
      margin-left: var(--coblocks-spacing--3, 1.5em)
  }

  .wp-block-coblocks-features__inner[class*="gutter"]:not(.has-responsive-columns) .wp-block-coblocks-feature:not(:first-child) {
      margin-left: var(--coblocks-spacing--3, 1.5em)
  }

  .wp-block-coblocks-features__inner[class*="gutter"]:not(.has-responsive-columns) .wp-block-coblocks-feature:not(:last-child) {
      margin-right: var(--coblocks-spacing--3, 1.5em)
  }
}

.wp-block-coblocks-features__inner[class*="gutter"]:not(.has-responsive-columns).has-1-columns .wp-block-coblocks-feature {
  margin-left: 0;
  margin-right: 0
}

.wp-block-coblocks-food-item {
  margin-top: 2.75em
}

.wp-block-coblocks-food-item__figure {
  display: flex;
  margin: 0.35em 0 1.25em;
  overflow: hidden;
  padding-top: 100%;
  position: relative;
  width: 100%
}

.wp-block-coblocks-food-item__figure img,.wp-block-coblocks-food-item__figure img[itemprop="image"] {
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  top: 0;
  vertical-align: middle;
  width: 100%
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .wp-block-coblocks-food-item__figure img,.wp-block-coblocks-food-item__figure img[itemprop="image"] {
      height: auto;
      left: 50%;
      min-width: 100%;
      top: 50%;
      transform: translate(-50%, -50%)
  }
}

.wp-block-coblocks-food-item__heading-wrapper {
  align-items: center;
  display: flex;
  flex: 1 85%;
  margin: 0 0 0.25em;
  order: 1
}

.wp-block-coblocks-food-item__heading,.wp-block-coblocks-food-item__heading[itemprop="name"] {
  margin: 0;
  padding: 0
}

.wp-block-coblocks-food-item__content {
  align-content: flex-start;
  display: flex;
  flex: 1 100%;
  flex-wrap: wrap
}

.wp-block-coblocks-food-item__attributes {
  display: flex;
  margin-left: 0.4em
}

.wp-block-coblocks-food-item__attributes svg {
  fill: currentColor;
  height: 18px;
  width: 18px
}

.wp-block-coblocks-food-item__attributes svg:last-of-type {
  margin-right: 0
}

.wp-block-coblocks-food-item__attribute {
  display: flex;
  background: none;
  border: none;
  margin-right: 0.25em !important;
  padding: 0
}

.wp-block-coblocks-food-item__attribute--spicier {
  margin-left: -0.25em !important
}

.wp-block-coblocks-food-item__description {
  flex: 1 100%;
  margin: 0;
  order: 3
}

.wp-block-coblocks-food-item__price {
  flex: 1 15%;
  margin: 0.5em 0 0 0;
  opacity: 0.7;
  order: 2
}

.wp-block-coblocks-food-item__icon {
  background-color: currentColor;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  height: 18px;
  width: 18px
}

.wp-block-coblocks-food-item__attribute--popular .wp-block-coblocks-food-item__icon {
  -webkit-mask-image: url(images/food-attribute/popular.svg);
  mask-image: url(images/food-attribute/popular.svg)
}

.wp-block-coblocks-food-item__attribute--popular .wp-block-coblocks-food-item__icon:last-of-type {
  margin-right: 0
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .wp-block-coblocks-food-item__attribute--popular .wp-block-coblocks-food-item__icon {
      background-image: url(images/food-attribute/popular.svg);
      color: transparent !important
  }
}

.wp-block-coblocks-food-item__attribute--spicy .wp-block-coblocks-food-item__icon {
  -webkit-mask-image: url(images/food-attribute/spicy.svg);
  mask-image: url(images/food-attribute/spicy.svg)
}

.wp-block-coblocks-food-item__attribute--spicy .wp-block-coblocks-food-item__icon:last-of-type {
  margin-right: 0
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .wp-block-coblocks-food-item__attribute--spicy .wp-block-coblocks-food-item__icon {
      background-image: url(images/food-attribute/spicy.svg);
      color: transparent !important
  }
}

.wp-block-coblocks-food-item__attribute--vegan .wp-block-coblocks-food-item__icon {
  -webkit-mask-image: url(images/food-attribute/vegan.svg);
  mask-image: url(images/food-attribute/vegan.svg)
}

.wp-block-coblocks-food-item__attribute--vegan .wp-block-coblocks-food-item__icon:last-of-type {
  margin-right: 0
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .wp-block-coblocks-food-item__attribute--vegan .wp-block-coblocks-food-item__icon {
      background-image: url(images/food-attribute/vegan.svg);
      color: transparent !important
  }
}

.wp-block-coblocks-food-item__attribute--vegetarian .wp-block-coblocks-food-item__icon {
  -webkit-mask-image: url(images/food-attribute/vegetarian.svg);
  mask-image: url(images/food-attribute/vegetarian.svg)
}

.wp-block-coblocks-food-item__attribute--vegetarian .wp-block-coblocks-food-item__icon:last-of-type {
  margin-right: 0
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .wp-block-coblocks-food-item__attribute--vegetarian .wp-block-coblocks-food-item__icon {
      background-image: url(images/food-attribute/vegetarian.svg);
      color: transparent !important
  }
}

.wp-block-coblocks-food-item__attribute--pescatarian .wp-block-coblocks-food-item__icon {
  -webkit-mask-image: url(images/food-attribute/pescatarian.svg);
  mask-image: url(images/food-attribute/pescatarian.svg)
}

.wp-block-coblocks-food-item__attribute--pescatarian .wp-block-coblocks-food-item__icon:last-of-type {
  margin-right: 0
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .wp-block-coblocks-food-item__attribute--pescatarian .wp-block-coblocks-food-item__icon {
      background-image: url(images/food-attribute/pescatarian.svg);
      color: transparent !important
  }
}

.wp-block-coblocks-food-item__attribute--gluten-free .wp-block-coblocks-food-item__icon {
  -webkit-mask-image: url(images/food-attribute/gluten-free.svg);
  mask-image: url(images/food-attribute/gluten-free.svg)
}

.wp-block-coblocks-food-item__attribute--gluten-free .wp-block-coblocks-food-item__icon:last-of-type {
  margin-right: 0
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .wp-block-coblocks-food-item__attribute--gluten-free .wp-block-coblocks-food-item__icon {
      background-image: url(images/food-attribute/gluten-free.svg);
      color: transparent !important
  }
}

.wp-block-coblocks-food-and-drinks.has-columns.has-2-columns>h1,.wp-block-coblocks-food-and-drinks.has-columns.has-2-columns>h2,.wp-block-coblocks-food-and-drinks.has-columns.has-2-columns>h3,.wp-block-coblocks-food-and-drinks.has-columns.has-2-columns>h4,.wp-block-coblocks-food-and-drinks.has-columns.has-2-columns>h5,.wp-block-coblocks-food-and-drinks.has-columns.has-2-columns>h6,.wp-block-coblocks-food-and-drinks.has-columns.has-3-columns>h1,.wp-block-coblocks-food-and-drinks.has-columns.has-3-columns>h2,.wp-block-coblocks-food-and-drinks.has-columns.has-3-columns>h3,.wp-block-coblocks-food-and-drinks.has-columns.has-3-columns>h4,.wp-block-coblocks-food-and-drinks.has-columns.has-3-columns>h5,.wp-block-coblocks-food-and-drinks.has-columns.has-3-columns>h6,.wp-block-coblocks-food-and-drinks.has-columns.has-4-columns>h1,.wp-block-coblocks-food-and-drinks.has-columns.has-4-columns>h2,.wp-block-coblocks-food-and-drinks.has-columns.has-4-columns>h3,.wp-block-coblocks-food-and-drinks.has-columns.has-4-columns>h4,.wp-block-coblocks-food-and-drinks.has-columns.has-4-columns>h5,.wp-block-coblocks-food-and-drinks.has-columns.has-4-columns>h6 {
  max-width: 100%;
  flex-basis: 100%
}

@media (min-width: 600px) {
  .wp-block-coblocks-food-and-drinks:not(.is-style-list) .wp-block-coblocks-food-item__content {
      text-align:center;
      flex-flow: column;
      justify-content: center
  }
}

@media (min-width: 600px) {
  .wp-block-coblocks-food-and-drinks:not(.is-style-list) .wp-block-coblocks-food-item__heading-wrapper {
      justify-content:center
  }
}

.wp-block-coblocks-food-and-drinks:not(.is-style-list) .wp-block-coblocks-food-item__price {
  margin-top: 0;
  text-align: right
}

@media (min-width: 600px) {
  .wp-block-coblocks-food-and-drinks:not(.is-style-list) .wp-block-coblocks-food-item__price {
      text-align:inherit
  }
}

.wp-block-coblocks-food-and-drinks.is-style-list .wp-block-coblocks-food-item {
  display: flex;
  flex: 1 100%;
  margin-top: 1.5em;
  max-width: 100%
}

@media (min-width: 600px) {
  .wp-block-coblocks-food-and-drinks.is-style-list .wp-block-coblocks-food-item {
      align-items:center
  }
}

.wp-block-coblocks-food-and-drinks.is-style-list .wp-block-coblocks-food-item figure,.wp-block-coblocks-food-and-drinks.is-style-list .wp-block-coblocks-food-item .components-placeholder {
  flex: 0 0 auto;
  margin: 0 20px 0 0 !important;
  max-height: 75px;
  max-width: 75px;
  padding-top: 75px
}

@media (min-width: 600px) {
  .wp-block-coblocks-food-and-drinks.is-style-list .wp-block-coblocks-food-item figure,.wp-block-coblocks-food-and-drinks.is-style-list .wp-block-coblocks-food-item .components-placeholder {
      max-height:100px;
      max-width: 100px;
      padding-top: 100px
  }
}

.wp-block-coblocks-food-and-drinks.is-style-list .wp-block-coblocks-food-item__attributes {
  margin-left: 0.6em
}

.wp-block-coblocks-food-and-drinks.is-style-list .wp-block-coblocks-food-item__description {
  max-width: calc(100% - 50px)
}

.wp-block-coblocks-food-and-drinks.is-style-list .wp-block-coblocks-food-item__price {
  margin-top: 0;
  text-align: right
}

.coblocks-form label {
  display: block;
  float: none;
  margin-bottom: 3px
}

.coblocks-form .coblocks-form__submit+label {
  margin: 1.25rem 0 3px 0
}

.coblocks-form .coblocks-field,.coblocks-form select {
  margin: 0 0 1.25rem 0;
  width: 100%
}

.coblocks-form .coblocks-field.verify,.coblocks-form select.verify {
  height: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 0;
  z-index: -1
}

.coblocks-form .coblocks-field input[type="radio"] {
  float: left;
  margin: 5px 5px 0 0;
  display: inline-block
}

.coblocks-form .coblocks-field .coblocks-checkbox-label {
  display: inline-flex;
  width: 95%
}

.coblocks-form textarea {
  float: none;
  height: 200px;
  margin: 0 0 1.15rem 0;
  resize: vertical;
  width: 100%
}

.coblocks-form .required {
  color: #d94f4f;
  margin-left: 5px
}

.coblocks-form .coblocks-radio-label+.coblocks-field.verify+.coblocks-form__submit {
  margin-top: 1.25rem
}

.coblocks-form .coblocks-form__submit .wp-block-button__link.is-style-outline {
  background-color: transparent;
  border: 2px solid !important
}

.coblocks-form .coblocks-form__submit .wp-block-button__link.is-style-circular {
  border-radius: 100px !important
}

.coblocks-form .coblocks-form__submit .wp-block-button__link.is-style-3d {
  box-shadow: inset 0 -3px 0 0 rgba(0,0,0,0.25)
}

.coblocks-form .coblocks-form__submit .wp-block-button__link.is-style-shadow {
  box-shadow: 0 4px 6px rgba(0,0,0,0.11),0 1px 3px rgba(0,0,0,0.075)
}

.coblocks-form .coblocks-form__inline-fields {
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 1.15rem
}

.coblocks-form .coblocks-form__inline-fields .coblocks-form__inline-field {
  margin-bottom: 0.15rem;
  width: 50%
}

.coblocks-form .coblocks-form__inline-fields .coblocks-form__inline-field input[type="text"] {
  margin-bottom: 3px;
  width: 100%
}

.coblocks-form .coblocks-form__inline-fields .coblocks-form__inline-field:first-child {
  padding-right: 10px
}

.coblocks-form .coblocks-form__inline-fields .coblocks-form__inline-field:last-child {
  padding-left: 10px
}

@media only screen and (max-width: 535px) {
  .coblocks-form .coblocks-form__inline-fields {
      display:block
  }

  .coblocks-form .coblocks-form__inline-fields .coblocks-form__inline-field {
      width: 100%
  }

  .coblocks-form .coblocks-form__inline-fields .coblocks-form__inline-field:first-child,.coblocks-form .coblocks-form__inline-fields .coblocks-form__inline-field:last-child {
      margin: 0 0 1.15rem 0;
      padding: 0
  }
}

.coblocks-form__subtext {
  display: block;
  line-height: 1;
  margin-bottom: -0.3rem;
  margin-top: 0.3rem;
  opacity: 0.66
}

.coblocks-form .coblocks-form-submission {
  margin-bottom: 4em;
  padding: 1.5em 1em
}

.coblocks-form .coblocks-form-submission p {
  margin: 0 auto;
  word-wrap: break-word
}

.coblocks-form .form-errors .form-error-message {
  color: #d94f4f
}

.coblocks-form .coblocks--inline {
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  margin-bottom: 1.25rem
}

.coblocks-form .coblocks--inline label {
  margin-right: 10px
}

.coblocks-form .coblocks--inline input[type="radio"] {
  margin-top: 5px
}

.coblocks-form .coblocks--inline .coblocks-checkbox-label {
  width: auto
}

.coblocks-form .coblocks--inline input[type="checkbox"] {
  margin-top: 2px
}

.is-twentysixteen .coblocks-form__submit,.is-twentynineteen .coblocks-form__submit {
  margin-top: 1.5em
}

.is-twentyseventeen .coblocks-field {
  margin-bottom: 1.75rem
}

.is-twentyseventeen .coblocks-form__submit .wp-block-button__link {
  margin-top: 0.1em
}

.is-twentynineteen .coblocks-form .components-text-control__input,.is-twentynineteen .coblocks-form .components-textarea-control__input {
  border-color: #ccc;
  border-radius: 0;
  padding: 1.2rem 0
}

.is-twentynineteen .coblocks-form__submit.wp-block-button {
  margin-top: 0
}

.is-twentyseventeen .coblocks-label {
  font-weight: 800
}

.is-twentyseventeen .coblocks-form__submit {
  margin-top: -0.75em
}

.is-twentysixteen .coblocks-form .components-text-control__input,.is-twentysixteen .coblocks-form .components-textarea-control__input {
  background-color: #f7f7f7;
  border-color: #d1d1d1;
  border-radius: 2px;
  padding: 0.75rem 0
}

.is-twentysixteen .coblocks-form .components-base-control {
  margin-bottom: 0
}

.is-twentysixteen .coblocks-form .components-base-control .components-base-control__field {
  margin-bottom: 0
}

.is-twentysixteen .coblocks-form__submit.wp-block-button {
  margin-top: 0
}

.wp-block-coblocks-gallery-carousel,.wp-block-coblocks-gallery-carousel .coblocks-gallery {
  position: relative;
  overflow: hidden
}

.wp-block-coblocks-gallery-carousel .coblocks-gallery--figure {
  height: 100%
}

.wp-block-coblocks-gallery-carousel .carousel-nav.has-border-radius-2 img {
  border-radius: 2px
}

.wp-block-coblocks-gallery-carousel .carousel-nav.has-border-radius-3 img {
  border-radius: 3px
}

.wp-block-coblocks-gallery-carousel .carousel-nav.has-border-radius-4 img {
  border-radius: 4px
}

.wp-block-coblocks-gallery-carousel .carousel-nav.has-border-radius-5 img {
  border-radius: 5px
}

.wp-block-coblocks-gallery-carousel .carousel-nav.has-border-radius-6 img {
  border-radius: 6px
}

.wp-block-coblocks-gallery-carousel .carousel-nav.has-border-radius-7 img {
  border-radius: 7px
}

.wp-block-coblocks-gallery-carousel .carousel-nav.has-border-radius-8 img {
  border-radius: 8px
}

.wp-block-coblocks-gallery-carousel .carousel-nav.has-border-radius-9 img {
  border-radius: 9px
}

.wp-block-coblocks-gallery-carousel .carousel-nav.has-border-radius-10 img {
  border-radius: 10px
}

.wp-block-coblocks-gallery-carousel .carousel-nav.has-border-radius-11 img {
  border-radius: 11px
}

.wp-block-coblocks-gallery-carousel .carousel-nav.has-border-radius-12 img {
  border-radius: 12px
}

.wp-block-coblocks-gallery-carousel .carousel-nav.has-border-radius-13 img {
  border-radius: 13px
}

.wp-block-coblocks-gallery-carousel .carousel-nav.has-border-radius-14 img {
  border-radius: 14px
}

.wp-block-coblocks-gallery-carousel .carousel-nav.has-border-radius-15 img {
  border-radius: 15px
}

.wp-block-coblocks-gallery-carousel .carousel-nav.has-border-radius-16 img {
  border-radius: 16px
}

.wp-block-coblocks-gallery-carousel .carousel-nav.has-border-radius-17 img {
  border-radius: 17px
}

.wp-block-coblocks-gallery-carousel .carousel-nav.has-border-radius-18 img {
  border-radius: 18px
}

.wp-block-coblocks-gallery-carousel .carousel-nav.has-border-radius-19 img {
  border-radius: 19px
}

.wp-block-coblocks-gallery-carousel .carousel-nav.has-border-radius-20 img {
  border-radius: 20px
}

.wp-block-coblocks-gallery-carousel .flickity-button {
  align-items: center;
  border-radius: 100%;
  color: #fff;
  cursor: pointer;
  display: flex;
  height: auto;
  width: auto;
  margin: 0 1%;
  padding: 15px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: 250ms background-color linear;
  z-index: 3
}

.wp-block-coblocks-gallery-carousel .flickity-button:hover {
  background-color: rgba(255,255,255,0.15)
}

.wp-block-coblocks-gallery-carousel .flickity-button:focus {
  background-color: rgba(255,255,255,0.25);
  box-shadow: inset 0 0 0 3px rgba(255,255,255,0.25);
  outline: none
}

@media (min-width: 600px) {
  .wp-block-coblocks-gallery-carousel .flickity-button {
      margin:0 2%
  }

  .wp-block-coblocks-gallery-carousel .flickity-button:hover {
      background-color: rgba(255,255,255,0.25)
  }
}

.wp-block-coblocks-gallery-carousel .flickity-button-icon {
  display: none
}

.wp-block-coblocks-gallery-carousel .flickity-button::after {
  display: block;
  content: "";
  background-color: #fff;
  height: 28px;
  position: relative;
  width: 28px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat
}

@media (min-width: 960px) {
  .wp-block-coblocks-gallery-carousel .flickity-button::after {
      height:32px;
      width: 32px
  }
}

.wp-block-coblocks-gallery-carousel .flickity-button.previous {
  height: 62px;
  left: 0;
  width: 62px
}

.wp-block-coblocks-gallery-carousel .flickity-button.previous::after {
  width: 32px;
  height: 32px;
  left: -1px;
  -webkit-mask-image: url(images/lightbox/arrow-left.svg);
  mask-image: url(images/lightbox/arrow-left.svg)
}

.wp-block-coblocks-gallery-carousel .flickity-button.next {
  width: 62px;
  height: 62px
}

.wp-block-coblocks-gallery-carousel .flickity-button.next::after {
  width: 32px;
  height: 32px;
  -webkit-mask-image: url(images/lightbox/arrow-right.svg);
  mask-image: url(images/lightbox/arrow-right.svg);
  right: -1px
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .wp-block-coblocks-gallery-carousel .flickity-button.previous::after {
      background-image: url(images/lightbox/arrow-left.svg);
      color: transparent !important;
      background-color: transparent !important
  }

  .wp-block-coblocks-gallery-carousel .flickity-button.next::after {
      background-image: url(images/lightbox/arrow-right.svg);
      color: transparent !important;
      background-color: transparent !important
  }
}

.wp-block-coblocks-gallery-carousel .carousel-nav {
  height: auto
}

.wp-block-coblocks-gallery-carousel .carousel-nav .flickity-viewport {
  height: 80px !important;
  margin-left: 0;
  margin-right: 0
}

.wp-block-coblocks-gallery-carousel .carousel-nav figure {
  margin: 0
}

.wp-block-coblocks-gallery-carousel .carousel-nav .coblocks--figure {
  height: 100%;
  position: relative
}

.wp-block-coblocks-gallery-carousel .carousel-nav .coblocks--item-thumbnail {
  height: 80px;
  opacity: 0.4;
  overflow: hidden;
  transition: opacity 250ms ease;
  width: 100px
}

.wp-block-coblocks-gallery-carousel .carousel-nav .coblocks--item-thumbnail:hover {
  opacity: 0.66
}

.wp-block-coblocks-gallery-carousel .carousel-nav .coblocks--item-thumbnail.is-selected {
  opacity: 1
}

.wp-block-coblocks-gallery-carousel .carousel-nav .coblocks--item-thumbnail img {
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  top: 0;
  vertical-align: middle;
  width: 100%
}

.has-responsive-height .has-carousel {
  height: auto !important;
  padding-bottom: 56.25%;
  position: relative
}

.has-responsive-height .has-carousel .flickity-viewport {
  left: 0;
  position: absolute;
  top: 0;
  width: 100%
}

.wp-block-coblocks-gallery-collage.alignfull ul {
  padding-left: 1em;
  padding-right: 1em
}

.wp-block-coblocks-gallery-collage:not(.is-style-layered) li {
  margin: 0
}

.wp-block-coblocks-gallery-collage ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0 !important;
  padding: 0 !important
}

.wp-block-coblocks-gallery-collage ul li {
  list-style: none
}

.wp-block-coblocks-gallery-collage.has-no-gutter .wp-block-coblocks-gallery-collage__item {
  padding: 0 !important
}

.wp-block-coblocks-gallery-collage__item figure,.wp-block-coblocks-gallery-collage__item .block-editor-media-placeholder {
  padding: 0
}

.wp-block-coblocks-gallery-collage__item:nth-child(1) {
  align-self: flex-end;
  width: 75%
}

.wp-block-coblocks-gallery-collage__item:nth-child(1) figure,.wp-block-coblocks-gallery-collage__item:nth-child(1) .block-editor-media-placeholder {
  padding-top: calc(330 / 495 * 100%)
}

.wp-block-coblocks-gallery-collage__item:nth-child(2) {
  align-self: flex-end;
  margin-right: auto !important;
  width: 25%
}

.wp-block-coblocks-gallery-collage__item:nth-child(2) figure,.wp-block-coblocks-gallery-collage__item:nth-child(2) .block-editor-media-placeholder {
  padding-top: 100%
}

.wp-block-coblocks-gallery-collage__item:nth-child(3) {
  align-self: flex-start;
  margin-left: auto !important;
  width: 25%
}

.wp-block-coblocks-gallery-collage__item:nth-child(3) figure,.wp-block-coblocks-gallery-collage__item:nth-child(3) .block-editor-media-placeholder {
  padding-top: 100%
}

.wp-block-coblocks-gallery-collage__item:nth-child(4) {
  align-self: flex-start;
  width: 25%
}

.wp-block-coblocks-gallery-collage__item:nth-child(4) figure,.wp-block-coblocks-gallery-collage__item:nth-child(4) .block-editor-media-placeholder {
  padding-top: 100%
}

.wp-block-coblocks-gallery-collage__item:nth-child(5) {
  align-self: flex-start;
  width: 25%
}

.wp-block-coblocks-gallery-collage__item:nth-child(5) figure,.wp-block-coblocks-gallery-collage__item:nth-child(5) .block-editor-media-placeholder {
  padding-top: 150%
}

.is-style-tiled .wp-block-coblocks-gallery-collage__item:nth-child(1),.is-style-tiled .wp-block-coblocks-gallery-collage__item:nth-child(4) {
  width: 66.66%
}

.is-style-tiled .wp-block-coblocks-gallery-collage__item:nth-child(1) figure,.is-style-tiled .wp-block-coblocks-gallery-collage__item:nth-child(1) .block-editor-media-placeholder,.is-style-tiled .wp-block-coblocks-gallery-collage__item:nth-child(4) figure,.is-style-tiled .wp-block-coblocks-gallery-collage__item:nth-child(4) .block-editor-media-placeholder {
  padding-top: 66%
}

.is-style-tiled .wp-block-coblocks-gallery-collage__item:nth-child(2),.is-style-tiled .wp-block-coblocks-gallery-collage__item:nth-child(3) {
  width: 33.33%
}

.is-style-tiled .wp-block-coblocks-gallery-collage__item:nth-child(2) figure,.is-style-tiled .wp-block-coblocks-gallery-collage__item:nth-child(2) .block-editor-media-placeholder,.is-style-tiled .wp-block-coblocks-gallery-collage__item:nth-child(3) figure,.is-style-tiled .wp-block-coblocks-gallery-collage__item:nth-child(3) .block-editor-media-placeholder {
  padding-top: 100%
}

.is-style-layered .wp-block-coblocks-gallery-collage__item {
  align-self: flex-start
}

.is-style-layered .wp-block-coblocks-gallery-collage__item:nth-child(1) {
  margin-left: calc(150 / 890 * 100%) !important;
  width: calc(358 / 890 * 100%);
  z-index: 4
}

.is-style-layered .wp-block-coblocks-gallery-collage__item:nth-child(1) figure,.is-style-layered .wp-block-coblocks-gallery-collage__item:nth-child(1) .block-editor-media-placeholder {
  padding-top: calc(492 / 358 * 100%)
}

.is-style-layered .wp-block-coblocks-gallery-collage__item:nth-child(2) {
  margin-left: calc(175 / 850 * 100%) !important;
  margin-top: calc(117 / 990 * 100%) !important;
  width: calc(198 / 890 * 100%);
  z-index: 2
}

.is-style-layered .wp-block-coblocks-gallery-collage__item:nth-child(2) figure,.is-style-layered .wp-block-coblocks-gallery-collage__item:nth-child(2) .block-editor-media-placeholder {
  padding-top: 100%
}

.is-style-layered .wp-block-coblocks-gallery-collage__item:nth-child(3) {
  margin-left: calc(328 / 890 * 100%) !important;
  margin-top: calc(249 / 890 * 100% * -1) !important;
  width: calc(492 / 890 * 100%);
  z-index: 3
}

.is-style-layered .wp-block-coblocks-gallery-collage__item:nth-child(3) figure,.is-style-layered .wp-block-coblocks-gallery-collage__item:nth-child(3) .block-editor-media-placeholder {
  padding-top: calc(340 / 492 * 100%)
}

.is-style-layered .wp-block-coblocks-gallery-collage__item:nth-child(4) {
  margin-top: calc(189 / 890 * 100% * -1) !important;
  width: calc(492 / 890 * 100%);
  z-index: 1
}

.is-style-layered .wp-block-coblocks-gallery-collage__item:nth-child(4) figure,.is-style-layered .wp-block-coblocks-gallery-collage__item:nth-child(4) .block-editor-media-placeholder {
  padding-top: calc(378 / 492 * 100%)
}

.wp-block-coblocks-gallery-collage__figure {
  display: flex;
  margin: 0;
  position: relative;
  width: 100%
}

.wp-block-coblocks-gallery-collage__figure img {
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  top: 0;
  vertical-align: middle;
  width: 100%
}

.wp-block-coblocks-gallery-collage figcaption {
  bottom: 0;
  font-size: 13px;
  opacity: 0.9;
  padding: 30px 10px 10px;
  position: absolute;
  text-align: center;
  width: 100%
}

.wp-block-coblocks-gallery-collage.has-caption-style-dark figcaption {
  background: linear-gradient(0deg, rgba(0,0,0,0.7) 0, rgba(0,0,0,0.3) 50%, transparent)
}

.wp-block-coblocks-gallery-collage.has-caption-style-light figcaption {
  background: linear-gradient(0deg, rgba(255,255,255,0.93) 6.3%, rgba(255,255,255,0.5) 61%, rgba(255,255,255,0))
}

.wp-block-coblocks-gallery-collage:not(.has-caption-color).has-caption-style-dark figcaption {
  color: #fff
}

.wp-block-coblocks-gallery-collage:not(.has-caption-color).has-caption-style-light figcaption {
  color: #000
}

.wp-block-coblocks-gallery-collage:not([class*="is-style"]) .wp-block-coblocks-gallery-collage__item:nth-child(1),.wp-block-coblocks-gallery-collage:not([class*="is-style"]) .wp-block-coblocks-gallery-collage__item:nth-child(2) {
  padding-bottom: calc(var(--coblocks-spacing--1, 0.5em) * 2)
}

@media (min-width: 600px) {
  .wp-block-coblocks-gallery-collage:not([class*="is-style"]).has-medium-gutter .wp-block-coblocks-gallery-collage__item:nth-child(1),.wp-block-coblocks-gallery-collage:not([class*="is-style"]).has-medium-gutter .wp-block-coblocks-gallery-collage__item:nth-child(2) {
      padding-bottom:calc(var(--coblocks-spacing--2, 1em) * 2)
  }
}

@media (min-width: 600px) {
  .wp-block-coblocks-gallery-collage:not([class*="is-style"]).has-large-gutter .wp-block-coblocks-gallery-collage__item:nth-child(1),.wp-block-coblocks-gallery-collage:not([class*="is-style"]).has-large-gutter .wp-block-coblocks-gallery-collage__item:nth-child(2) {
      padding-bottom:calc(var(--coblocks-spacing--3, 1.5em) * 2)
  }
}

@media (min-width: 600px) {
  .wp-block-coblocks-gallery-collage:not([class*="is-style"]).has-huge-gutter .wp-block-coblocks-gallery-collage__item:nth-child(1),.wp-block-coblocks-gallery-collage:not([class*="is-style"]).has-huge-gutter .wp-block-coblocks-gallery-collage__item:nth-child(2) {
      padding-bottom:calc(var(--coblocks-spacing--4, 2em) * 2)
  }
}

.wp-block-coblocks-gallery-collage:not([class*="is-style"]) ul>*:not(:first-child) {
  padding-left: calc(var(--coblocks-spacing--1, 0.5em) * 2)
}

@media (min-width: 600px) {
  .wp-block-coblocks-gallery-collage:not([class*="is-style"]).has-medium-gutter ul>*:not(:first-child) {
      padding-left:calc(var(--coblocks-spacing--2, 1em) * 2)
  }
}

@media (min-width: 600px) {
  .wp-block-coblocks-gallery-collage:not([class*="is-style"]).has-large-gutter ul>*:not(:first-child) {
      padding-left:calc(var(--coblocks-spacing--3, 1.5em) * 2)
  }
}

@media (min-width: 600px) {
  .wp-block-coblocks-gallery-collage:not([class*="is-style"]).has-huge-gutter ul>*:not(:first-child) {
      padding-left:calc(var(--coblocks-spacing--4, 2em) * 2)
  }
}

.is-style-tiled .wp-block-coblocks-gallery-collage__item:nth-child(2) {
  padding-left: calc(var(--coblocks-spacing--1, 0.5em) * 2)
}

@media (min-width: 600px) {
  .is-style-tiled.has-medium-gutter .wp-block-coblocks-gallery-collage__item:nth-child(2) {
      padding-left:calc(var(--coblocks-spacing--2, 1em) * 2)
  }
}

@media (min-width: 600px) {
  .is-style-tiled.has-large-gutter .wp-block-coblocks-gallery-collage__item:nth-child(2) {
      padding-left:calc(var(--coblocks-spacing--3, 1.5em) * 2)
  }
}

@media (min-width: 600px) {
  .is-style-tiled.has-huge-gutter .wp-block-coblocks-gallery-collage__item:nth-child(2) {
      padding-left:calc(var(--coblocks-spacing--4, 2em) * 2)
  }
}

.is-style-tiled .wp-block-coblocks-gallery-collage__item:nth-child(3) {
  padding-right: calc(var(--coblocks-spacing--1, 0.5em) * 2);
  padding-top: calc(var(--coblocks-spacing--1, 0.5em) * 2)
}

@media (min-width: 600px) {
  .is-style-tiled.has-medium-gutter .wp-block-coblocks-gallery-collage__item:nth-child(3) {
      padding-right:calc(var(--coblocks-spacing--2, 1em) * 2);
      padding-top: calc(var(--coblocks-spacing--2, 1em) * 2)
  }
}

@media (min-width: 600px) {
  .is-style-tiled.has-large-gutter .wp-block-coblocks-gallery-collage__item:nth-child(3) {
      padding-right:calc(var(--coblocks-spacing--3, 1.5em) * 2);
      padding-top: calc(var(--coblocks-spacing--3, 1.5em) * 2)
  }
}

@media (min-width: 600px) {
  .is-style-tiled.has-huge-gutter .wp-block-coblocks-gallery-collage__item:nth-child(3) {
      padding-right:calc(var(--coblocks-spacing--4, 2em) * 2);
      padding-top: calc(var(--coblocks-spacing--4, 2em) * 2)
  }
}

.is-style-tiled .wp-block-coblocks-gallery-collage__item:nth-child(4) {
  padding-top: calc(var(--coblocks-spacing--1, 0.5em) * 2)
}

@media (min-width: 600px) {
  .is-style-tiled.has-medium-gutter .wp-block-coblocks-gallery-collage__item:nth-child(4) {
      padding-top:calc(var(--coblocks-spacing--2, 1em) * 2)
  }
}

@media (min-width: 600px) {
  .is-style-tiled.has-large-gutter .wp-block-coblocks-gallery-collage__item:nth-child(4) {
      padding-top:calc(var(--coblocks-spacing--3, 1.5em) * 2)
  }
}

@media (min-width: 600px) {
  .is-style-tiled.has-huge-gutter .wp-block-coblocks-gallery-collage__item:nth-child(4) {
      padding-top:calc(var(--coblocks-spacing--4, 2em) * 2)
  }
}

.wp-block-coblocks-gallery-collage .pb-0 {
  padding-bottom: 0 !important
}

.wp-block-coblocks-gallery-collage .pl-0 {
  padding-left: 0 !important
}

.wp-block-coblocks-gallery-masonry {
  position: relative
}

.wp-block-coblocks-gallery-masonry ul {
  list-style: none !important;
  padding: 0 !important;
  margin-left: 0 !important
}

.wp-block-coblocks-gallery-masonry li {
  margin: 0 !important
}

.wp-block-coblocks-gallery-masonry figure {
  overflow: hidden
}

.wp-block-coblocks-gallery-masonry img {
  height: auto;
  width: 100%;
  vertical-align: bottom
}

.wp-block-coblocks-gallery-masonry figcaption {
  background: linear-gradient(0deg, rgba(0,0,0,0.7) 0, rgba(0,0,0,0.3) 50%, transparent);
  bottom: 0;
  font-size: 13px;
  max-height: 100% !important;
  opacity: 0.9;
  overflow: auto;
  padding: 30px 10px 10px !important;
  position: absolute !important;
  text-align: center;
  width: 100%
}

.wp-block-coblocks-gallery-masonry figcaption img {
  display: inline
}

.wp-block-coblocks-gallery-offset .coblocks-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 0;
  margin-left: 0;
  padding-left: 0
}

.wp-block-coblocks-gallery-offset img {
  max-height: 22vw;
  width: auto
}

.wp-block-coblocks-gallery-offset figcaption {
  background: linear-gradient(0deg, rgba(0,0,0,0.7) 0, rgba(0,0,0,0.3) 50%, transparent);
  bottom: 0;
  font-size: 13px;
  max-height: 100% !important;
  opacity: 1;
  overflow: hidden;
  padding: 30px 10px 10px !important;
  position: absolute !important;
  text-align: center;
  width: 100%
}

@media (min-width: 600px) {
  .wp-block-coblocks-gallery-offset .has-small-images img {
      max-height:22vw
  }
}

@media (min-width: 960px) {
  .wp-block-coblocks-gallery-offset .has-small-images img {
      max-height:11vw
  }
}

@media (min-width: 600px) {
  .wp-block-coblocks-gallery-offset .has-medium-images img {
      max-height:28vw
  }
}

@media (min-width: 960px) {
  .wp-block-coblocks-gallery-offset .has-medium-images img {
      max-height:12vw
  }
}

@media (min-width: 600px) {
  .wp-block-coblocks-gallery-offset .has-large-images img {
      max-height:40vw
  }
}

@media (min-width: 960px) {
  .wp-block-coblocks-gallery-offset .has-large-images img {
      max-height:20vw
  }
}

@media (min-width: 600px) {
  .wp-block-coblocks-gallery-offset .has-huge-images img {
      max-height:40vw
  }
}

@media (min-width: 960px) {
  .wp-block-coblocks-gallery-offset .has-huge-images img {
      max-height:30vw
  }
}

.wp-block-coblocks-gallery-offset .has-small-gutter,.wp-block-coblocks-gallery-offset .has-medium-gutter,.wp-block-coblocks-gallery-offset .has-large-gutter,.wp-block-coblocks-gallery-offset .has-huge-gutter {
  margin-bottom: calc(var(--coblocks-spacing--1, 0.5em) * -1 * 2);
  margin-left: calc(var(--coblocks-spacing--1, 0.5em) * -0.5 * 2)
}

.wp-block-coblocks-gallery-offset .has-small-gutter figure,.wp-block-coblocks-gallery-offset .has-medium-gutter figure,.wp-block-coblocks-gallery-offset .has-large-gutter figure,.wp-block-coblocks-gallery-offset .has-huge-gutter figure {
  margin-bottom: calc(var(--coblocks-spacing--1, 0.5em) * 2);
  margin-left: calc(var(--coblocks-spacing--1, 0.5em) * 2)
}

@media (min-width: 600px) {
  .wp-block-coblocks-gallery-offset .has-medium-gutter {
      margin-bottom:calc(var(--coblocks-spacing--2, 1em) * -1 * 2);
      margin-left: calc(var(--coblocks-spacing--2, 1em) * -0.5 * 2)
  }

  .wp-block-coblocks-gallery-offset .has-medium-gutter figure {
      margin-bottom: calc(var(--coblocks-spacing--2, 1em) * 2);
      margin-left: calc(var(--coblocks-spacing--2, 1em) * 2)
  }
}

@media (min-width: 600px) {
  .wp-block-coblocks-gallery-offset .has-large-gutter {
      margin-bottom:calc(var(--coblocks-spacing--3, 1.5em) * -1 * 2);
      margin-left: calc(var(--coblocks-spacing--3, 1.5em) * -0.5 * 2)
  }

  .wp-block-coblocks-gallery-offset .has-large-gutter figure {
      margin-bottom: calc(var(--coblocks-spacing--3, 1.5em) * 2);
      margin-left: calc(var(--coblocks-spacing--3, 1.5em) * 2)
  }
}

@media (min-width: 600px) {
  .wp-block-coblocks-gallery-offset .has-huge-gutter {
      margin-bottom:calc(var(--coblocks-spacing--4, 2em) * -1 * 2);
      margin-left: calc(var(--coblocks-spacing--4, 2em) * -0.5 * 2)
  }

  .wp-block-coblocks-gallery-offset .has-huge-gutter figure {
      margin-bottom: calc(var(--coblocks-spacing--4, 2em) * 2);
      margin-left: calc(var(--coblocks-spacing--4, 2em) * 2)
  }
}

.wp-block-coblocks-gallery-stacked {
  position: relative;
  text-align: center
}

.wp-block-coblocks-gallery-stacked.alignleft,.wp-block-coblocks-gallery-stacked.alignright {
  max-width: 305px
}

.wp-block-coblocks-gallery-stacked:not(.has-caption-color) {
  color: #555d66 !important
}

.wp-block-coblocks-gallery-stacked .coblocks-gallery {
  margin-left: 0;
  padding-left: 0
}

.wp-block-coblocks-gallery-stacked .coblocks-gallery--item {
  margin-left: auto;
  margin-right: auto
}

.wp-block-coblocks-gallery-stacked .coblocks-gallery--item:last-child {
  margin-bottom: 0
}

.wp-block-coblocks-gallery-stacked .coblocks-gallery--item:last-child figure {
  margin-bottom: 0 !important
}

.wp-block-coblocks-gallery-stacked .coblocks-gallery--item:last-child figcaption {
  padding-bottom: 0
}

.wp-block-coblocks-gallery-stacked .coblocks-gallery--caption {
  padding-bottom: 1em;
  padding-top: 1em;
  text-align: center
}

.wp-block-coblocks-gallery-stacked .coblocks-gallery--caption:not([class*="font-size"]) {
  font-size: 13px
}

.is-selected .wp-block-coblocks-gallery-stacked .coblocks-gallery--caption,.is-typing .wp-block-coblocks-gallery-stacked .coblocks-gallery--caption {
  padding-left: 1em;
  padding-right: 1em
}

.wp-block-coblocks-gallery-stacked .has-fullwidth-images img {
  width: 100%
}

.wp-block-coblocks-gallery-stacked .coblocks-video-bg {
  z-index: 1
}

.wp-block-coblocks-gif.alignfull,.wp-block-coblocks-gif.alignwide {
  width: inherit
}

.wp-block-coblocks-gif.alignfull img,.wp-block-coblocks-gif.alignwide img {
  width: 100%
}

.wp-block-coblocks-gist .gist-file {
  border-color: rgba(0,0,0,0.125) !important;
  border-radius: 4px !important;
  margin-bottom: 0 !important
}

.wp-block-coblocks-gist .gist-file a,.wp-block-coblocks-gist .gist-file a:hover {
  box-shadow: none
}

.wp-block-coblocks-gist .gist-file+.gist-file {
  margin-top: 5px !important
}

.wp-block-coblocks-gist .gist-data {
  border-radius: 3px 3px 0 0
}

.wp-block-coblocks-gist .gist-data tr,.wp-block-coblocks-gist .gist-data td {
  border: none
}

.wp-block-coblocks-gist .gist-data td.blob-num {
  padding: 1px 15px 1px 20px !important
}

.wp-block-coblocks-gist .gist-data td.blob-code {
  padding-left: 0 !important
}

.wp-block-coblocks-gist .gist-meta {
  border-radius: 0 0 3px 3px
}

.wp-block-coblocks-gist.no-meta .gist .gist-data {
  border-bottom: 0;
  border-radius: 3px
}

.wp-block-coblocks-gist.no-meta .gist .gist-meta {
  display: none
}

.wp-block-coblocks-gist figcaption {
  color: #555d66;
  font-size: 13px;
  margin-bottom: 1em;
  margin-top: 0.5em;
  text-align: center
}

.wp-block-coblocks-gist table {
  table-layout: auto
}

.wp-block-coblocks-hero {
  position: relative
}

.wp-block-coblocks-hero .has-left-content {
  text-align: left
}

.wp-block-coblocks-hero .has-center-content {
  text-align: center
}

.wp-block-coblocks-hero .has-center-content .wp-block-coblocks-buttons__inner {
  justify-content: center
}

.wp-block-coblocks-hero .has-center-content h1::before,.wp-block-coblocks-hero .has-center-content h2::before {
  margin-left: auto;
  margin-right: auto
}

.wp-block-coblocks-hero .has-right-content {
  text-align: right
}

.wp-block-coblocks-hero .has-right-content .wp-block-coblocks-buttons__inner {
  justify-content: flex-end
}

.wp-block-coblocks-hero .has-right-content h1::before,.wp-block-coblocks-hero .has-right-content h2::before {
  margin-left: auto
}

.wp-block-coblocks-hero__inner {
  display: flex;
  position: relative
}

.wp-block-coblocks-hero__inner.is-fullscreen {
  height: 100vh
}

.wp-block-coblocks-hero__inner .wp-block-coblocks-hero__content {
  position: relative
}

.wp-block-coblocks-hero__inner[class*="hero-top"] {
  align-items: flex-start
}

.wp-block-coblocks-hero__inner[class*="hero-center"] {
  align-items: center
}

.wp-block-coblocks-hero__inner[class*="hero-bottom"] {
  align-items: flex-end
}

.wp-block-coblocks-hero__inner[class*="left-align"] {
  justify-content: flex-start
}

.wp-block-coblocks-hero__inner[class*="center-align"] {
  justify-content: center
}

.wp-block-coblocks-hero__inner[class*="right-align"] {
  justify-content: flex-end
}

.wp-block-coblocks-hero .wp-block-button {
  margin-bottom: 0
}

.wp-block-coblocks-highlight {
  background: transparent !important
}

.wp-block-coblocks-highlight:empty {
  display: none
}

.wp-block-coblocks-highlight+.wp-block-coblocks-highlight {
  padding-top: 7px
}

.wp-block-coblocks-highlight__content {
  padding: 2px 5px 2px 3px;
  position: relative
}

.wp-block-coblocks-highlight__content:not(.has-background) {
  background-color: #fff8e5
}

.wp-block-coblocks-icon {
  position: relative
}

.wp-block-coblocks-icon__inner {
  display: inline-block;
  position: relative;
  vertical-align: middle
}

.wp-block-coblocks-icon__inner a {
  border: 0 !important;
  box-shadow: none !important;
  height: 100%;
  outline: none;
  text-shadow: none;
  width: 100%
}

.wp-block-coblocks-icon__inner svg {
  fill: currentColor;
  height: 100%;
  vertical-align: middle;
  width: 100%
}

.wp-block-coblocks-logos.has-filter-grayscale img,.wp-block-coblocks-logos.is-style-black-and-white img {
  -webkit-filter: grayscale(1) brightness(0);
  filter: grayscale(1) brightness(0)
}

.wp-block-coblocks-logos.is-style-grayscale img {
  -webkit-filter: grayscale(1);
  filter: grayscale(1)
}

.wp-block-coblocks-logos__row {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center
}

@media (max-width: 600px) {
  .wp-block-coblocks-logos__row {
      flex-wrap:wrap
  }
}

.wp-block-coblocks-logos__row+.wp-block-coblocks-logos__row {
  margin-top: 2em
}

.wp-block-coblocks-logos__row>div {
  padding: 0 1.5em
}

.wp-block-coblocks-logos__row img {
  vertical-align: middle;
  width: 100%
}

.wp-block-coblocks-media-card__wrapper {
  align-items: center;
  display: grid;
  grid-template-areas: "media-text-media media-text-content";
  grid-template-columns: 55% auto;
  grid-template-rows: auto;
  margin-left: auto;
  margin-right: auto;
  padding: 0 !important;
  position: relative
}

.wp-block-coblocks-media-card.is-style-right .wp-block-coblocks-media-card__wrapper {
  grid-template-areas: "media-text-content media-text-media";
  grid-template-columns: auto 55%
}

.wp-block-coblocks-media-card__inner {
  color: inherit !important
}

.wp-block-coblocks-media-card__media {
  grid-area: media-text-media;
  margin: 0;
  position: relative
}

.has-no-media .wp-block-coblocks-media-card__media {
  align-items: center;
  background: rgba(139,139,150,0.1);
  display: flex;
  height: 70vw;
  justify-content: center;
  margin-bottom: 0;
  margin-top: 0;
  max-height: 600px
}

@media (min-width: 600px) {
  .has-no-media .wp-block-coblocks-media-card__media {
      width:100%
  }
}

.has-no-media.alignfull .wp-block-coblocks-media-card__media,.has-no-media.alignwide .wp-block-coblocks-media-card__media {
  max-height: 700px
}

.wp-block-coblocks-media-card__media svg {
  height: 30px;
  opacity: 0.15;
  position: relative;
  top: -30px;
  width: 30px
}

@media (min-width: 600px) {
  .wp-block-coblocks-media-card__media svg {
      height:50px;
      width: 50px
  }
}

.wp-block-coblocks-media-card__content {
  grid-area: media-text-content;
  margin-left: -50%;
  position: relative;
  word-break: break-word;
  z-index: 1
}

@media (min-width: 600px) {
  .wp-block-coblocks-media-card__content {
      margin-left:-100px
  }
}

.wp-block-coblocks-media-card__content p:last-of-type {
  margin-bottom: 0
}

.wp-block-coblocks-media-card__content h1,.wp-block-coblocks-media-card__content h2,.wp-block-coblocks-media-card__content h3,.wp-block-coblocks-media-card__content h4,.wp-block-coblocks-media-card__content h5,.wp-block-coblocks-media-card__content h6 {
  margin-top: 0 !important
}

.wp-block-coblocks-media-card.is-style-right .wp-block-coblocks-media-card__content {
  margin-left: 0;
  margin-right: -50%
}

@media (min-width: 600px) {
  .wp-block-coblocks-media-card.is-style-right .wp-block-coblocks-media-card__content {
      margin-right:-100px
  }
}

.wp-block-coblocks-media-card__wrapper>figure>img,.wp-block-coblocks-media-card__wrapper>figure>video {
  max-width: unset;
  vertical-align: middle;
  width: 100%
}

@media (max-width: 599px) {
  .wp-block-coblocks-media-card.is-stacked-on-mobile .wp-block-coblocks-media-card__wrapper {
      grid-template-areas:"media-text-media" "media-text-content";
      grid-template-columns: 100% !important
  }
}

@media (max-width: 599px) and (min-width: 600px) {
  .wp-block-coblocks-media-card.is-stacked-on-mobile.is-style-right .wp-block-coblocks-media-card__content {
      margin-right:-100px
  }
}

@media (max-width: 599px) and (min-width: 600px) {
  .wp-block-coblocks-media-card.is-stacked-on-mobile .wp-block-coblocks-media-card__media {
      position:inherit
  }
}

@media (max-width: 599px) {
  .wp-block-coblocks-media-card.is-stacked-on-mobile .wp-block-coblocks-media-card__content {
      margin-left:5%;
      margin-right: 5%;
      margin-top: -33%
  }
}

@media (max-width: 599px) and (min-width: 600px) {
  .wp-block-coblocks-media-card.is-stacked-on-mobile .wp-block-coblocks-media-card__content {
      grid-area:media-text-content;
      margin-left: -100px
  }
}

@media (max-width: 599px) {
  .wp-block-coblocks-media-card.is-stacked-on-mobile .wp-block-coblocks-media-card__content p:last-of-type {
      margin-bottom:0
  }
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .wp-block-coblocks-media-card .wp-block-coblocks-media-card__wrapper {
      display: flex
  }

  .wp-block-coblocks-media-card .wp-block-coblocks-media-card__wrapper .wp-block-coblocks-row__inner {
      flex-grow: 1
  }

  .wp-block-coblocks-media-card.is-style-right figure {
      order: 2
  }

  .wp-block-coblocks-media-card.is-style-right .wp-block-coblocks-row__inner {
      order: 1
  }
}

body.rtl .is-style-left .wp-block-coblocks-media-card__wrapper {
  grid-template-areas: "media-text-content media-text-media" "resizer resizer" !important;
  grid-template-columns: auto 55% !important
}

body.rtl .is-style-left .wp-block-coblocks-media-card__content {
  margin-right: -100px;
  margin-left: 0
}

body.rtl .is-style-right .wp-block-coblocks-media-card__wrapper {
  grid-template-areas: "media-text-media media-text-content" "resizer resizer" !important;
  grid-template-columns: 55% auto !important
}

body.rtl .is-style-right .wp-block-coblocks-media-card__content {
  margin-left: -100px;
  margin-right: 0
}

@media (min-width: 768px) and (max-width: 1024px) {
  .is-twentynineteen .entry .entry-content .wp-block-coblocks-media-card.is-stacked-on-mobile {
      flex-direction:column
  }

  .is-twentynineteen .entry .entry-content .wp-block-coblocks-media-card.is-stacked-on-mobile .wp-block-coblocks-media-card__wrapper {
      grid-template-areas: "media-text-media" "media-text-content";
      grid-template-columns: 100% !important
  }
}

@media (min-width: 768px) and (max-width: 1024px) and (max-width: 599px) {
  .is-twentynineteen .entry .entry-content .wp-block-coblocks-media-card.is-stacked-on-mobile .wp-block-coblocks-media-card__media {
      position:inherit
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .is-twentynineteen .entry .entry-content .wp-block-coblocks-media-card.is-stacked-on-mobile .wp-block-coblocks-media-card__content {
      margin-left:5%;
      margin-right: 5%;
      margin-top: -33%
  }

  .is-twentynineteen .entry .entry-content .wp-block-coblocks-media-card.is-stacked-on-mobile .wp-block-coblocks-media-card__content p:last-of-type {
      margin-bottom: 0
  }
}

.wp-block-coblocks-post-carousel.alignfull {
  padding-left: var(--coblocks-spacing--2, 1em);
  padding-right: var(--coblocks-spacing--2, 1em)
}

@media (min-width: 600px) {
  .wp-block-coblocks-post-carousel.alignfull {
      padding-left:var(--coblocks-spacing--4, 2em);
      padding-right: var(--coblocks-spacing--4, 2em)
  }
}

@media (min-width: 782px) {
  .wp-block-coblocks-post-carousel:not(.alignwide) .coblocks-slick {
      padding-bottom:0
  }
}

.wp-block-coblocks-post-carousel .slick-slider {
  box-sizing: border-box;
  display: block;
  position: relative;
  touch-action: pan-y;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
}

.wp-block-coblocks-post-carousel .slick-slider .slick-track,.wp-block-coblocks-post-carousel .slick-slider .slick-list {
  transform: translate3d(0, 0, 0)
}

.wp-block-coblocks-post-carousel .slick-list {
  display: block;
  margin: 0;
  margin-bottom: calc(var(--coblocks-spacing--2, 1em) * -1);
  overflow: hidden;
  padding: 0;
  position: relative
}

.wp-block-coblocks-post-carousel .slick-list:focus {
  outline: none
}

.wp-block-coblocks-post-carousel .slick-list.dragging {
  cursor: pointer;
  cursor: hand
}

.wp-block-coblocks-post-carousel .slick-track {
  display: flex;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 0
}

.wp-block-coblocks-post-carousel .slick-track::before,.wp-block-coblocks-post-carousel .slick-track::after {
  content: "";
  display: table
}

.wp-block-coblocks-post-carousel .slick-track::after {
  clear: both
}

.slick-loading .wp-block-coblocks-post-carousel .slick-track {
  visibility: hidden
}

.wp-block-coblocks-post-carousel .slick-slide {
  display: none;
  float: left;
  height: auto;
  margin: 0 var(--coblocks-spacing--2, 1em);
  min-height: 1px;
  outline: none
}

[dir="rtl"] .wp-block-coblocks-post-carousel .slick-slide {
  float: right
}

.wp-block-coblocks-post-carousel .slick-slide img {
  display: block
}

.wp-block-coblocks-post-carousel .slick-slide.slick-loading img {
  display: none
}

.wp-block-coblocks-post-carousel .slick-slide.dragging img {
  pointer-events: none
}

.wp-block-coblocks-post-carousel .slick-initialized .slick-slide {
  display: block
}

.wp-block-coblocks-post-carousel .slick-prev,.wp-block-coblocks-post-carousel .slick-next {
  background: transparent;
  border: none;
  bottom: 0;
  color: transparent;
  cursor: pointer;
  display: inline-block;
  font-size: initial;
  height: var(--coblocks-spacing--8, 4em);
  line-height: 0;
  outline: none;
  padding: 0.5em;
  position: absolute;
  width: var(--coblocks-spacing--8, 4em)
}

.wp-block-coblocks-post-carousel .slick-prev:hover,.wp-block-coblocks-post-carousel .slick-prev:focus,.wp-block-coblocks-post-carousel .slick-next:hover,.wp-block-coblocks-post-carousel .slick-next:focus {
  cursor: pointer;
  opacity: 0.5;
  outline: none
}

.wp-block-coblocks-post-carousel .slick-prev:hover::before,.wp-block-coblocks-post-carousel .slick-prev:focus::before,.wp-block-coblocks-post-carousel .slick-next:hover::before,.wp-block-coblocks-post-carousel .slick-next:focus::before {
  opacity: 1
}

.wp-block-coblocks-post-carousel .slick-prev {
  left: 50%;
  transform: translateX(-100%)
}

.wp-block-coblocks-post-carousel .slick-next {
  right: 50%;
  transform: translateX(100%)
}

.wp-block-coblocks-post-carousel .slick-prev.slick-disabled::before,.wp-block-coblocks-post-carousel .slick-next.slick-disabled::before {
  opacity: 0.25
}

.wp-block-coblocks-post-carousel .slick-prev::before,.wp-block-coblocks-post-carousel .slick-next::before {
  background-image: url(images/lightbox/arrow-left.svg);
  background-position: center;
  background-repeat: no-repeat;
  content: " ";
  display: block;
  height: 100%;
  width: 100%
}

.wp-block-coblocks-post-carousel .slick-next::before {
  background-image: url(images/lightbox/arrow-right.svg)
}

.wp-block-coblocks-post-carousel [dir="rtl"] .slick-prev::before {
  background-image: url(images/lightbox/arrow-right.svg)
}

.wp-block-coblocks-post-carousel [dir="rtl"] .slick-next::before {
  background-image: url(images/lightbox/arrow-left.svg)
}

.wp-block-coblocks-post-carousel__image {
  display: table;
  margin-bottom: var(--coblocks-spacing--2, 1em);
  position: relative;
  width: 100%
}

.wp-block-coblocks-post-carousel__image a {
  display: block;
  outline: none;
  padding-top: 100%;
  width: 100%
}

.wp-block-coblocks-post-carousel__content {
  display: flex;
  flex-direction: column;
  width: 100%
}

.wp-block-coblocks-post-carousel__date {
  color: #6c7781;
  display: block;
  font-size: 16px;
  margin-bottom: var(--coblocks-spacing--1, 0.5em)
}

.wp-block-coblocks-post-carousel__more-link {
  align-self: self-start;
  margin-top: var(--coblocks-spacing--2, 1em)
}

.wp-block-coblocks-post-carousel__excerpt {
  margin-top: var(--coblocks-spacing--1, 0.5em)
}

@media (min-width: 782px) {
  .wp-block-coblocks-post-carousel:not(.alignwide) .slick-next,.wp-block-coblocks-post-carousel:not(.alignwide) .slick-prev {
      bottom:50%;
      transform: translateY(-50%)
  }
}

@media (min-width: 782px) {
  .wp-block-coblocks-post-carousel:not(.alignwide) .slick-prev {
      left:-5em
  }
}

@media (min-width: 782px) {
  .wp-block-coblocks-post-carousel:not(.alignwide) .slick-next {
      right:-5em
  }
}

.is-twentynineteen .wp-block-coblocks-post-carousel {
  line-height: 1.6
}

.is-twentynineteen .wp-block-coblocks-post-carousel__content a {
  font-family: -apple-system,"BlinkMacSystemFont","Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif;
  font-size: calc(22px * 1.125);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  text-decoration: none !important
}

.is-twentynineteen .wp-block-coblocks-post-carousel__date {
  font-family: -apple-system,"BlinkMacSystemFont","Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif;
  font-weight: 700
}

.is-twentytwenty .wp-block-coblocks-post-carousel {
  color: #6d6d6d
}

.is-twentytwenty .wp-block-coblocks-post-carousel .columns {
  margin-bottom: 0.5em
}

.is-twentytwenty .wp-block-coblocks-post-carousel a {
  font-family: "Inter var", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 700;
  letter-spacing: -0.025em;
  text-decoration: none
}

.is-twentytwenty .wp-block-coblocks-post-carousel a:hover {
  text-decoration: underline
}

.is-twentytwenty .wp-block-coblocks-post-carousel__date {
  color: #6d6d6d;
  font-family: "Inter var", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 0.7em;
  font-weight: 600;
  letter-spacing: normal;
  margin-bottom: 0.2em
}

.wp-block-coblocks-posts+.wp-block-coblocks-posts {
  margin-top: var(--coblocks-spacing--2, 1em)
}

.wp-block-coblocks-posts.has-1-columns>div:first-child {
  margin-top: 0
}

.wp-block-coblocks-posts.has-1-columns>div:last-child {
  margin-bottom: 0
}

.wp-block-coblocks-posts__inner {
  margin-left: 0;
  padding-left: 0
}

.wp-block-coblocks-posts__item {
  align-items: stretch;
  display: flex;
  flex: 1 1 auto;
  margin-bottom: var(--coblocks-spacing--3, 1.5em);
  margin-left: 0;
  margin-top: 0;
  padding-left: 0;
  width: 100%
}

.is-style-stacked .wp-block-coblocks-posts__item {
  flex-direction: column
}

.is-style-horizontal .has-image-right .wp-block-coblocks-posts__item {
  flex-direction: row-reverse
}

.wp-block-coblocks-posts__image {
  display: table;
  flex: 0 0 auto;
  height: 14.285%;
  margin-right: var(--coblocks-spacing--2, 1em);
  position: relative;
  width: 14.285%
}

@media (min-width: 600px) {
  .wp-block-coblocks-posts__image {
      margin-right:var(--coblocks-spacing--3, 1.5em)
  }
}

.has-image-right .wp-block-coblocks-posts__image {
  margin-left: var(--coblocks-spacing--2, 1em);
  margin-right: 0
}

@media (min-width: 600px) {
  .has-image-right .wp-block-coblocks-posts__image {
      margin-left:var(--coblocks-spacing--3, 1.5em)
  }
}

.wp-block-coblocks-posts__image>* {
  display: block;
  padding-top: 100%;
  width: 100%
}

.is-style-stacked .wp-block-coblocks-posts__image {
  margin-bottom: var(--coblocks-spacing--2, 1em);
  width: 100%
}

@media (min-width: 600px) {
  .has-medium-image .wp-block-coblocks-posts__image {
      height:20%;
      width: 20%
  }
}

@media (min-width: 600px) {
  .has-large-image .wp-block-coblocks-posts__image {
      height:33.33%;
      width: 33.33%
  }
}

@media (min-width: 600px) {
  .has-huge-image .wp-block-coblocks-posts__image {
      height:33.33%;
      width: 33.33%
  }
}

@media (min-width: 782px) {
  .has-huge-image .wp-block-coblocks-posts__image {
      height:50%;
      width: 50%
  }
}

.has-four-to-three-image .wp-block-coblocks-posts__image>* {
  padding-top: 75%
}

.has-sixteen-to-nine-image .wp-block-coblocks-posts__image>* {
  padding-top: 56.25%
}

.has-circle-image .wp-block-coblocks-posts__image>* {
  border-radius: 100%
}

.wp-block-coblocks-posts__content {
  display: flex;
  flex-direction: column;
  width: 100%
}

.wp-block-coblocks-posts__content.self-center {
  align-self: center
}

.wp-block-coblocks-posts__date {
  color: #6c7781;
  display: block;
  font-size: 16px;
  margin-top: var(--coblocks-spacing--1, 0.5em)
}

.wp-block-coblocks-posts__excerpt {
  margin-top: var(--coblocks-spacing--1, 0.5em)
}

.wp-block-coblocks-posts__more-link {
  align-self: self-start;
  display: block
}

.is-twentynineteen .wp-block-coblocks-posts {
  line-height: 1.6
}

.is-twentynineteen .wp-block-coblocks-posts__content a {
  font-family: -apple-system,"BlinkMacSystemFont","Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif;
  font-size: calc(22px * 1.125);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  text-decoration: none !important
}

.is-twentynineteen .wp-block-coblocks-posts__date {
  font-family: -apple-system,"BlinkMacSystemFont","Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif;
  font-weight: 700
}

.is-twentytwenty .wp-block-coblocks-posts .has-columns {
  margin-bottom: 0.5em
}

.is-twentytwenty .wp-block-coblocks-posts a {
  font-family: "Inter var", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, sans-serif;
  font-weight: 700;
  letter-spacing: -0.025em;
  text-decoration: none
}

.is-twentytwenty .wp-block-coblocks-posts a:hover {
  text-decoration: underline
}

.is-twentytwenty .wp-block-coblocks-posts__date {
  color: #6d6d6d;
  font-family: "Inter var", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 0.7em;
  font-weight: 600;
  letter-spacing: normal;
  margin-bottom: 0.2em
}

.wp-block-coblocks-pricing-table-item {
  padding: 4em 1.5em;
  position: relative;
  width: 100%
}

@media (min-width: 600px) {
  .wp-block-coblocks-pricing-table-item {
      margin-bottom:0
  }
}

.wp-block-coblocks-pricing-table-item:not(.has-background) {
  background: rgba(140,140,151,0.1)
}

.wp-block-coblocks-pricing-table-item__title {
  margin-top: 0;
  padding: 0
}

.wp-block-coblocks-pricing-table-item__price-wrapper {
  display: flex;
  line-height: 1;
  position: relative
}

.wp-block-coblocks-pricing-table-item__currency {
  font-size: 1em
}

.wp-block-coblocks-pricing-table-item__amount {
  font-size: 5em;
  letter-spacing: normal;
  line-height: 1 !important;
  margin: 0;
  padding: 0
}

.wp-block-coblocks-pricing-table-item .wp-block-coblocks-pricing-table-item__features {
  margin: 0 0 30px;
  max-width: none;
  padding: 0
}

.wp-block-coblocks-pricing-table-item .wp-block-coblocks-pricing-table-item__features ul,.wp-block-coblocks-pricing-table-item .wp-block-coblocks-pricing-table-item__features li {
  list-style: none;
  margin: 0;
  padding: 0
}

.wp-block-coblocks-pricing-table-item .wp-block-coblocks-pricing-table-item__title {
  display: block;
  margin-bottom: 20px
}

.wp-block-coblocks-pricing-table-item .wp-block-coblocks-pricing-table-item__price-wrapper {
  margin-bottom: 20px
}

.wp-block-coblocks-pricing-table-item .wp-block-button {
  margin-bottom: 0
}

.has-text-align-center .wp-block-coblocks-pricing-table-item__price-wrapper {
  justify-content: center
}

.has-text-align-right .wp-block-coblocks-pricing-table-item__price-wrapper {
  justify-content: flex-end
}

@media (max-width: 959px) {
  .wp-block-coblocks-pricing-table__inner.has-3-columns.has-small-gutter>*:not(.block-editor-inner-blocks):nth-of-type(1),.wp-block-coblocks-pricing-table__inner.has-3-columns.has-small-gutter>*:not(.block-editor-inner-blocks):nth-of-type(2) {
      max-width:calc(100% / 2 - var(--coblocks-spacing--1, 0.5em));
      flex-basis: 50%
  }
}

@media (max-width: 959px) {
  .wp-block-coblocks-pricing-table__inner.has-3-columns.has-small-gutter>*:not(.block-editor-inner-blocks):nth-of-type(3) {
      max-width:100%;
      margin-top: calc(2 * var(--coblocks-spacing--1, 0.5em));
      flex-basis: 100%
  }
}

@media (max-width: 599px) {
  .wp-block-coblocks-pricing-table__inner.has-3-columns.has-small-gutter>*:not(.block-editor-inner-blocks):nth-of-type(3) {
      margin-top:0
  }
}

@media (max-width: 959px) {
  .wp-block-coblocks-pricing-table__inner.has-3-columns.has-medium-gutter>*:not(.block-editor-inner-blocks):nth-of-type(1),.wp-block-coblocks-pricing-table__inner.has-3-columns.has-medium-gutter>*:not(.block-editor-inner-blocks):nth-of-type(2) {
      max-width:calc(100% / 2 - var(--coblocks-spacing--2, 1em));
      flex-basis: 50%
  }
}

@media (max-width: 959px) {
  .wp-block-coblocks-pricing-table__inner.has-3-columns.has-medium-gutter>*:not(.block-editor-inner-blocks):nth-of-type(3) {
      max-width:100%;
      margin-top: calc(2 * var(--coblocks-spacing--2, 1em));
      flex-basis: 100%
  }
}

@media (max-width: 599px) {
  .wp-block-coblocks-pricing-table__inner.has-3-columns.has-medium-gutter>*:not(.block-editor-inner-blocks):nth-of-type(3) {
      margin-top:0
  }
}

@media (max-width: 959px) {
  .wp-block-coblocks-pricing-table__inner.has-3-columns.has-large-gutter>*:not(.block-editor-inner-blocks):nth-of-type(1),.wp-block-coblocks-pricing-table__inner.has-3-columns.has-large-gutter>*:not(.block-editor-inner-blocks):nth-of-type(2) {
      max-width:calc(100% / 2.01 - var(--coblocks-spacing--3, 1.5em));
      flex-basis: 50%
  }
}

@media (max-width: 959px) {
  .wp-block-coblocks-pricing-table__inner.has-3-columns.has-large-gutter>*:not(.block-editor-inner-blocks):nth-of-type(3) {
      max-width:100%;
      margin-top: calc(2 * var(--coblocks-spacing--3, 1.5em));
      flex-basis: 100%
  }
}

@media (max-width: 599px) {
  .wp-block-coblocks-pricing-table__inner.has-3-columns.has-large-gutter>*:not(.block-editor-inner-blocks):nth-of-type(3) {
      margin-top:0
  }
}

@media (max-width: 959px) {
  .wp-block-coblocks-pricing-table__inner.has-3-columns.has-huge-gutter>*:not(.block-editor-inner-blocks):nth-of-type(1),.wp-block-coblocks-pricing-table__inner.has-3-columns.has-huge-gutter>*:not(.block-editor-inner-blocks):nth-of-type(2) {
      max-width:calc(100% / 2.02 - var(--coblocks-spacing--4, 2em));
      flex-basis: 50%
  }
}

@media (max-width: 959px) {
  .wp-block-coblocks-pricing-table__inner.has-3-columns.has-huge-gutter>*:not(.block-editor-inner-blocks):nth-of-type(3) {
      max-width:100%;
      margin-top: calc(2 * var(--coblocks-spacing--4, 2em));
      flex-basis: 100%
  }
}

@media (max-width: 599px) {
  .wp-block-coblocks-pricing-table__inner.has-3-columns.has-huge-gutter>*:not(.block-editor-inner-blocks):nth-of-type(3) {
      margin-top:0
  }
}

@media (min-width: 600px) {
  .wp-block-coblocks-pricing-table__inner:not(.has-responsive-columns) {
      display:flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between
  }
}

.wp-block-coblocks-pricing-table__inner:not(.has-responsive-columns) .wp-block-coblocks-pricing-table-item {
  margin-bottom: 1.5em
}

@media (min-width: 600px) {
  .wp-block-coblocks-pricing-table.has-2-columns .wp-block-coblocks-pricing-table__inner:not(.has-responsive-columns) .wp-block-coblocks-pricing-table-item {
      flex-basis:50%;
      max-width: calc(100% / 2 - .75em)
  }

  .wp-block-coblocks-pricing-table.has-3-columns .wp-block-coblocks-pricing-table__inner:not(.has-responsive-columns) .wp-block-coblocks-pricing-table-item {
      flex-basis: 33.333%;
      max-width: calc(100% / 3 - .75em)
  }
}

@media (min-width: 600px) {
  .wp-block-coblocks-pricing-table.has-4-columns .wp-block-coblocks-pricing-table__inner:not(.has-responsive-columns) .wp-block-coblocks-pricing-table-item {
      flex-basis:25%;
      max-width: calc(100% / 4 - .75em)
  }
}

@media (min-width: 600px) and (max-width: 1200px) {
  .wp-block-coblocks-pricing-table.has-4-columns .wp-block-coblocks-pricing-table__inner:not(.has-responsive-columns) .wp-block-coblocks-pricing-table-item {
      flex-basis:50%;
      max-width: calc(100% / 2 - .75em)
  }
}

.wp-block-coblocks-row {
  position: relative
}

.wp-block-coblocks-row:not([data-columns="1"]) {
  display: flex
}

.wp-block-coblocks-row:not([data-columns="1"]) .wp-block-coblocks-row__inner {
  display: flex;
  flex: 1
}

.wp-block-coblocks-row[data-columns="1"] .wp-block-coblocks-column__inner>[class*="wp-block-"] {
  margin-left: auto;
  margin-right: auto;
  max-width: calc(6 * (100vw / 12.5))
}

.wp-block-coblocks-row[data-columns="1"] .wp-block-coblocks-column__inner>[class*="wp-block-"].alignwide {
  max-width: calc(6 * (100vw / 8.5))
}

.wp-block-coblocks-row[data-columns="1"] .wp-block-coblocks-column__inner>[class*="wp-block-"].alignfull {
  max-width: 100%
}

.wp-block-coblocks-row[data-columns="1"] .wp-block-coblocks-column__inner>[class*="wp-block-"][data-columns="1"] .wp-block-coblocks-column__inner>:not([class*="wp-block-"]) {
  max-width: 100%
}

.wp-block-coblocks-row[data-columns="1"] .wp-block-coblocks-column__inner>:not([class*="wp-block-"]) {
  margin-left: auto;
  margin-right: auto;
  max-width: 100%
}

.wp-block-coblocks-column {
  height: 100%;
  margin-bottom: 32px;
  min-width: 0;
  overflow-wrap: break-word;
  position: relative;
  word-break: break-word
}

@media (min-width: 600px) {
  .wp-block-coblocks-column {
      margin-bottom:0
  }
}

.wp-block-coblocks-column p {
  margin-top: 0
}

.wp-block-coblocks-column p:last-of-type {
  margin-bottom: 0
}

.wp-block-coblocks-column__inner.has-background-overlay * {
  position: relative
}

.has-small-gutter>[class*="wp-block-coblocks-column"]:nth-child(odd) {
  margin-right: var(--coblocks-spacing--1, 0.5em)
}

.has-small-gutter>[class*="wp-block-coblocks-column"]:nth-child(even) {
  margin-left: var(--coblocks-spacing--1, 0.5em)
}

.has-small-gutter>[class*="wp-block-coblocks-column"]:not(:first-child) {
  margin-left: var(--coblocks-spacing--1, 0.5em)
}

.has-small-gutter>[class*="wp-block-coblocks-column"]:not(:last-child) {
  margin-right: var(--coblocks-spacing--1, 0.5em)
}

.has-medium-gutter>[class*="wp-block-coblocks-column"]:nth-child(odd) {
  margin-right: var(--coblocks-spacing--2, 1em)
}

.has-medium-gutter>[class*="wp-block-coblocks-column"]:nth-child(even) {
  margin-left: var(--coblocks-spacing--2, 1em)
}

.has-medium-gutter>[class*="wp-block-coblocks-column"]:not(:first-child) {
  margin-left: var(--coblocks-spacing--2, 1em)
}

.has-medium-gutter>[class*="wp-block-coblocks-column"]:not(:last-child) {
  margin-right: var(--coblocks-spacing--2, 1em)
}

.has-large-gutter>[class*="wp-block-coblocks-column"]:nth-child(odd) {
  margin-right: var(--coblocks-spacing--3, 1.5em)
}

.has-large-gutter>[class*="wp-block-coblocks-column"]:nth-child(even) {
  margin-left: var(--coblocks-spacing--3, 1.5em)
}

.has-large-gutter>[class*="wp-block-coblocks-column"]:not(:first-child) {
  margin-left: var(--coblocks-spacing--3, 1.5em)
}

.has-large-gutter>[class*="wp-block-coblocks-column"]:not(:last-child) {
  margin-right: var(--coblocks-spacing--3, 1.5em)
}

.has-huge-gutter>[class*="wp-block-coblocks-column"]:nth-child(odd) {
  margin-right: var(--coblocks-spacing--4, 2em)
}

.has-huge-gutter>[class*="wp-block-coblocks-column"]:nth-child(even) {
  margin-left: var(--coblocks-spacing--4, 2em)
}

.has-huge-gutter>[class*="wp-block-coblocks-column"]:not(:first-child) {
  margin-left: var(--coblocks-spacing--4, 2em)
}

.has-huge-gutter>[class*="wp-block-coblocks-column"]:not(:last-child) {
  margin-right: var(--coblocks-spacing--4, 2em)
}

@media (max-width: 599px) {
  .wp-block-coblocks-row__inner.is-stacked-on-mobile {
      flex-direction:column
  }

  .wp-block-coblocks-row__inner.is-stacked-on-mobile>.wp-block-coblocks-column {
      margin-left: 0 !important;
      margin-right: 0 !important;
      max-width: 100% !important;
      width: 100% !important
  }

  .wp-block-coblocks-row__inner.is-stacked-on-mobile>.wp-block-coblocks-column:last-child {
      margin-bottom: 0
  }

  .wp-block-coblocks-row__inner.is-stacked-on-mobile.has-no-gutter>[class*="wp-block"]:not(:last-child) {
      margin-bottom: 0
  }

  .wp-block-coblocks-row__inner.is-stacked-on-mobile.has-small-gutter>[class*="wp-block"]:not(:last-child) {
      margin-bottom: calc(var(--coblocks-spacing--1, 0.5em) * 2)
  }

  .wp-block-coblocks-row__inner.is-stacked-on-mobile.has-medium-gutter>[class*="wp-block"]:not(:last-child) {
      margin-bottom: calc(var(--coblocks-spacing--2, 1em) * 2)
  }

  .wp-block-coblocks-row__inner.is-stacked-on-mobile.has-large-gutter>[class*="wp-block"]:not(:last-child) {
      margin-bottom: calc(var(--coblocks-spacing--3, 1.5em) * 2)
  }

  .wp-block-coblocks-row__inner.is-stacked-on-mobile.has-huge-gutter>[class*="wp-block"]:not(:last-child) {
      margin-bottom: calc(var(--coblocks-spacing--4, 2em) * 2)
  }
}

.wp-block-coblocks-row__inner .wp-block[data-type="coblocks/column"] {
  display: flex;
  margin-top: 0;
  margin-bottom: 0
}

.wp-block-coblocks-row__inner .wp-block[data-type="coblocks/column"] .wp-block-coblocks-column,.wp-block-coblocks-row__inner .wp-block[data-type="coblocks/column"] .wp-block-coblocks-column__inner {
  flex: 1
}

.wp-block-coblocks-row__inner.are-vertically-aligned-top {
  align-items: flex-start
}

.wp-block-coblocks-row__inner.are-vertically-aligned-center {
  align-items: center
}

.wp-block-coblocks-row__inner.are-vertically-aligned-bottom {
  align-items: flex-end
}

.wp-block-coblocks-row__inner .wp-block-coblocks-column.is-vertically-aligned-top {
  display: flex
}

.wp-block-coblocks-row__inner .wp-block-coblocks-column.is-vertically-aligned-top .wp-block-coblocks-column__inner {
  align-self: flex-start
}

.wp-block-coblocks-row__inner .wp-block-coblocks-column.is-vertically-aligned-center {
  display: flex
}

.wp-block-coblocks-row__inner .wp-block-coblocks-column.is-vertically-aligned-center .wp-block-coblocks-column__inner {
  align-self: center
}

.wp-block-coblocks-row__inner .wp-block-coblocks-column.is-vertically-aligned-bottom {
  display: flex
}

.wp-block-coblocks-row__inner .wp-block-coblocks-column.is-vertically-aligned-bottom .wp-block-coblocks-column__inner {
  align-self: flex-end
}

.wp-block-coblocks-row__inner .wp-block-coblocks-column .wp-block-coblocks-column__inner {
  flex: 1
}

.wp-block-coblocks-row__inner .wp-block-coblocks-column.is-vertically-aligned-top,.wp-block-coblocks-row__inner .wp-block-coblocks-column.is-vertically-aligned-center,.wp-block-coblocks-row__inner .wp-block-coblocks-column.is-vertically-aligned-bottom {
  width: 100%
}

.wp-block-coblocks-service {
  margin: 0 0 var(--coblocks-spacing--3, 1.5em);
  max-width: 100%
}

@media (min-width: 600px) {
  .wp-block-coblocks-service {
      margin:0
  }
}

.wp-block-coblocks-service:last-child {
  margin-bottom: 0
}

.wp-block-coblocks-service h2,.wp-block-coblocks-service h3,.wp-block-coblocks-service h4,.wp-block-coblocks-service h5,.wp-block-coblocks-service h6 {
  margin-bottom: 0.5em;
  margin-top: 0
}

.wp-block-coblocks-service p:first-of-type {
  margin-top: 0
}

.wp-block-coblocks-service p:last-of-type {
  margin-bottom: 0
}

.wp-block-coblocks-service .wp-block-button {
  margin-bottom: 0;
  margin-top: 1.5em
}

.wp-block-coblocks-service__figure {
  display: flex;
  margin: 0 0 1.5em;
  padding: calc(3 / 4 * 100%) 0 0;
  position: relative;
  width: 100%
}

.is-style-sixbynine .wp-block-coblocks-service__figure {
  padding-top: calc(9 / 16 * 100%)
}

.is-style-circle .wp-block-coblocks-service__figure {
  border-radius: 100%;
  padding-top: 100%
}

.is-style-circle .wp-block-coblocks-service__figure img {
  border-radius: 100%
}

.is-style-square .wp-block-coblocks-service__figure {
  padding-top: 100%
}

.wp-block-coblocks-service__figure>img {
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  top: 0;
  vertical-align: middle;
  width: 100%
}

@media (min-width: 600px) {
  .wp-block-coblocks-services[data-columns] {
      display:flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between
  }
}

@media (min-width: 600px) {
  .wp-block-coblocks-services[data-columns][data-columns="2"]>.wp-block-coblocks-service {
      flex-basis:50%;
      max-width: calc(100% / 2 - var(--coblocks-spacing--2, 1em))
  }

  .wp-block-coblocks-services[data-columns][data-columns="3"]>.wp-block-coblocks-service {
      flex-basis: 33.333%;
      max-width: calc(100% / 3 - var(--coblocks-spacing--2, 1em))
  }
}

@media (min-width: 600px) and (max-width: 1280px) {
  .wp-block-coblocks-services[data-columns][data-columns="4"]>.wp-block-coblocks-service {
      flex-basis:50%;
      margin-bottom: 3em;
      max-width: calc(100% / 2 - var(--coblocks-spacing--2, 1em))
  }

  .wp-block-coblocks-services[data-columns][data-columns="4"]>.wp-block-coblocks-service:nth-child(1),.wp-block-coblocks-services[data-columns][data-columns="4"]>.wp-block-coblocks-service:nth-child(3) {
      margin-left: 0
  }

  .wp-block-coblocks-services[data-columns][data-columns="4"]>.wp-block-coblocks-service:nth-child(2),.wp-block-coblocks-services[data-columns][data-columns="4"]>.wp-block-coblocks-service:nth-child(4) {
      margin-right: 0
  }

  .wp-block-coblocks-services[data-columns][data-columns="4"]>.wp-block-coblocks-service:nth-child(3),.wp-block-coblocks-services[data-columns][data-columns="4"]>.wp-block-coblocks-service:nth-child(4) {
      margin-bottom: 0
  }
}

@media (min-width: 1280px) {
  .wp-block-coblocks-services[data-columns][data-columns="4"]>.wp-block-coblocks-service {
      flex-basis:25%;
      max-width: calc(100% / 4 - var(--coblocks-spacing--2, 1em))
  }
}

.wp-block-coblocks-shape-divider {
  display: flex;
  flex-direction: column;
  position: relative
}

.wp-block-coblocks-shape-divider svg {
  bottom: -1px;
  fill: currentColor;
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%
}

.wp-block-coblocks-shape-divider__svg-wrapper {
  position: relative
}

.wp-block-coblocks-shape-divider__alt-wrapper {
  background-color: currentColor
}

.wp-block-coblocks-shape-divider.is-horizontally-flipped svg {
  transform: scaleX(-1)
}

.wp-block-coblocks-shape-divider.is-vertically-flipped {
  flex-direction: column-reverse
}

.wp-block-coblocks-shape-divider.is-vertically-flipped svg {
  bottom: 0;
  top: -1px;
  transform: scaleY(-1)
}

.wp-block-coblocks-shape-divider.is-vertically-flipped.is-horizontally-flipped svg {
  transform: scaleX(-1) scaleY(-1)
}

.wp-block-coblocks-shape-divider .divider--waves path:nth-child(1) {
  opacity: 0.15
}

.wp-block-coblocks-shape-divider .divider--waves path:nth-child(2) {
  opacity: 0.3
}

.wp-block-coblocks-social.has-background {
  padding: 20px 30px
}

.wp-block-coblocks-social .wp-block-button__link:not(.has-background) {
  background-color: #31373c
}

.wp-block-coblocks-social .wp-block-button__link:not(.has-text-color) {
  color: #fff
}

.wp-block-coblocks-social ul,.wp-block-coblocks-social li {
  list-style: none;
  margin: 0 !important;
  padding: 0 !important
}

.wp-block-coblocks-social li {
  display: inline-block;
  margin: 3px 6px 3px 0 !important;
  vertical-align: middle
}

.wp-block-coblocks-social li::before,.wp-block-coblocks-social li::after {
  display: none !important
}

.wp-block-coblocks-social__button {
  align-items: center;
  border: none;
  border-radius: 0;
  box-shadow: none !important;
  cursor: pointer;
  display: inline-flex;
  font-size: 15px;
  justify-content: center;
  line-height: 1;
  padding: 10px 14px;
  text-align: center;
  text-decoration: none !important;
  white-space: normal;
  word-break: break-all
}

.wp-block-coblocks-social__button:first-of-type {
  margin-left: 0 !important
}

.wp-block-coblocks-social__button:last-of-type {
  margin-right: 0 !important
}

.wp-block-coblocks-social__text,.wp-block-coblocks-social__text:hover,.wp-block-coblocks-social:not(.is-style-mask) .wp-block-coblocks-social__icon,.wp-block-coblocks-social:not(.is-style-mask) .wp-block-coblocks-social__icon:hover {
  color: inherit
}

.wp-block-coblocks-social__icon+.wp-block-coblocks-social__text {
  margin-left: 8px
}

.wp-block-coblocks-social__icon {
  background-color: currentColor;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  height: 18px;
  width: 18px
}

.wp-block-coblocks-social__button--facebook .wp-block-coblocks-social__icon+.wp-block-coblocks-social__text,.wp-block-coblocks-social__button--linkedin .wp-block-coblocks-social__icon+.wp-block-coblocks-social__text {
  margin-left: 9px
}

.wp-block-coblocks-social__button--tumblr .wp-block-coblocks-social__icon+.wp-block-coblocks-social__text {
  margin-left: 4px
}

.wp-block-coblocks-social__button--twitter .wp-block-coblocks-social__icon {
  -webkit-mask-image: url(images/social/twitter.svg);
  mask-image: url(images/social/twitter.svg)
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .wp-block-coblocks-social__button--twitter .wp-block-coblocks-social__icon {
      background-image: url(images/social/twitter.svg);
      color: transparent !important
  }
}

.wp-block-coblocks-social__button--facebook .wp-block-coblocks-social__icon {
  -webkit-mask-image: url(images/social/facebook.svg);
  mask-image: url(images/social/facebook.svg)
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .wp-block-coblocks-social__button--facebook .wp-block-coblocks-social__icon {
      background-image: url(images/social/facebook.svg);
      color: transparent !important
  }
}

.wp-block-coblocks-social__button--pinterest .wp-block-coblocks-social__icon {
  -webkit-mask-image: url(images/social/pinterest.svg);
  mask-image: url(images/social/pinterest.svg)
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .wp-block-coblocks-social__button--pinterest .wp-block-coblocks-social__icon {
      background-image: url(images/social/pinterest.svg);
      color: transparent !important
  }
}

.wp-block-coblocks-social__button--linkedin .wp-block-coblocks-social__icon {
  -webkit-mask-image: url(images/social/linkedin.svg);
  mask-image: url(images/social/linkedin.svg)
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .wp-block-coblocks-social__button--linkedin .wp-block-coblocks-social__icon {
      background-image: url(images/social/linkedin.svg);
      color: transparent !important
  }
}

.wp-block-coblocks-social__button--tumblr .wp-block-coblocks-social__icon {
  -webkit-mask-image: url(images/social/tumblr.svg);
  mask-image: url(images/social/tumblr.svg)
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .wp-block-coblocks-social__button--tumblr .wp-block-coblocks-social__icon {
      background-image: url(images/social/tumblr.svg);
      color: transparent !important
  }
}

.wp-block-coblocks-social__button--reddit .wp-block-coblocks-social__icon {
  -webkit-mask-image: url(images/social/reddit.svg);
  mask-image: url(images/social/reddit.svg)
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .wp-block-coblocks-social__button--reddit .wp-block-coblocks-social__icon {
      background-image: url(images/social/reddit.svg);
      color: transparent !important
  }
}

.wp-block-coblocks-social__button--email .wp-block-coblocks-social__icon {
  -webkit-mask-image: url(images/social/email.svg);
  mask-image: url(images/social/email.svg)
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .wp-block-coblocks-social__button--email .wp-block-coblocks-social__icon {
      background-image: url(images/social/email.svg);
      color: transparent !important
  }
}

.wp-block-coblocks-social__button--google .wp-block-coblocks-social__icon {
  -webkit-mask-image: url(images/social/google.svg);
  mask-image: url(images/social/google.svg)
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .wp-block-coblocks-social__button--google .wp-block-coblocks-social__icon {
      background-image: url(images/social/google.svg);
      color: transparent !important
  }
}

.wp-block-coblocks-social__button--yelp .wp-block-coblocks-social__icon {
  -webkit-mask-image: url(images/social/yelp.svg);
  mask-image: url(images/social/yelp.svg)
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .wp-block-coblocks-social__button--yelp .wp-block-coblocks-social__icon {
      background-image: url(images/social/yelp.svg);
      color: transparent !important
  }
}

.wp-block-coblocks-social__button--youtube .wp-block-coblocks-social__icon {
  -webkit-mask-image: url(images/social/youtube.svg);
  mask-image: url(images/social/youtube.svg)
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .wp-block-coblocks-social__button--youtube .wp-block-coblocks-social__icon {
      background-image: url(images/social/youtube.svg);
      color: transparent !important
  }
}

.wp-block-coblocks-social__button--instagram .wp-block-coblocks-social__icon {
  -webkit-mask-image: url(images/social/instagram.svg);
  mask-image: url(images/social/instagram.svg)
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .wp-block-coblocks-social__button--instagram .wp-block-coblocks-social__icon {
      background-image: url(images/social/instagram.svg);
      color: transparent !important
  }
}

.wp-block-coblocks-social__button--houzz .wp-block-coblocks-social__icon {
  -webkit-mask-image: url(images/social/houzz.svg);
  mask-image: url(images/social/houzz.svg)
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .wp-block-coblocks-social__button--houzz .wp-block-coblocks-social__icon {
      background-image: url(images/social/houzz.svg);
      color: transparent !important
  }
}

.wp-block-coblocks-social.has-colors .wp-block-coblocks-social__text,.wp-block-coblocks-social.has-colors:not(.is-style-mask) .wp-block-coblocks-social__icon {
  color: #fff
}

.wp-block-coblocks-social.has-colors .wp-block-coblocks-social__button--twitter {
  background-color: #55acee !important
}

.wp-block-coblocks-social.has-colors .wp-block-coblocks-social__button--facebook {
  background-color: #3b5999 !important
}

.wp-block-coblocks-social.has-colors .wp-block-coblocks-social__button--pinterest {
  background-color: #e60023 !important
}

.wp-block-coblocks-social.has-colors .wp-block-coblocks-social__button--linkedin {
  background-color: #0077b5 !important
}

.wp-block-coblocks-social.has-colors .wp-block-coblocks-social__button--tumblr {
  background-color: #34465d !important
}

.wp-block-coblocks-social.has-colors .wp-block-coblocks-social__button--reddit {
  background-color: #ff5700 !important
}

.wp-block-coblocks-social.has-colors .wp-block-coblocks-social__button--email {
  background-color: #2880e5 !important
}

.wp-block-coblocks-social.has-colors .wp-block-coblocks-social__button--google {
  background-color: #dd4b39 !important
}

.wp-block-coblocks-social.has-colors .wp-block-coblocks-social__button--yelp {
  background-color: #d32323 !important
}

.wp-block-coblocks-social.has-colors .wp-block-coblocks-social__button--youtube {
  background-color: red !important
}

.wp-block-coblocks-social.has-colors .wp-block-coblocks-social__button--instagram {
  background-color: #ef0175 !important
}

.wp-block-coblocks-social.has-colors .wp-block-coblocks-social__button--houzz {
  background-color: #4ebc16 !important
}

.wp-block-coblocks-social.has-colors.is-style-mask .wp-block-coblocks-social__button--twitter {
  color: #55acee !important
}

.wp-block-coblocks-social.has-colors.is-style-mask .wp-block-coblocks-social__button--facebook {
  color: #3b5999 !important
}

.wp-block-coblocks-social.has-colors.is-style-mask .wp-block-coblocks-social__button--pinterest {
  color: #e60023 !important
}

.wp-block-coblocks-social.has-colors.is-style-mask .wp-block-coblocks-social__button--linkedin {
  color: #0077b5 !important
}

.wp-block-coblocks-social.has-colors.is-style-mask .wp-block-coblocks-social__button--tumblr {
  color: #34465d !important
}

.wp-block-coblocks-social.has-colors.is-style-mask .wp-block-coblocks-social__button--reddit {
  color: #ff5700 !important
}

.wp-block-coblocks-social.has-colors.is-style-mask .wp-block-coblocks-social__button--email {
  color: #2880e5 !important
}

.wp-block-coblocks-social.has-colors.is-style-mask .wp-block-coblocks-social__button--google {
  color: #dd4b39 !important
}

.wp-block-coblocks-social.has-colors.is-style-mask .wp-block-coblocks-social__button--yelp {
  color: #d32323 !important
}

.wp-block-coblocks-social.has-colors.is-style-mask .wp-block-coblocks-social__button--youtube {
  color: red !important
}

.wp-block-coblocks-social.has-colors.is-style-mask .wp-block-coblocks-social__button--instagram {
  color: #ef0175 !important
}

.wp-block-coblocks-social.has-colors.is-style-mask .wp-block-coblocks-social__button--houzz {
  color: #4ebc16 !important
}

.wp-block-coblocks-social:not(.is-style-text):not(.is-style-icon-and-text) .wp-block-coblocks-social__button {
  padding: 11px 24px
}

.wp-block-coblocks-social:not(.is-style-text):not(.is-style-icon-and-text) .wp-block-coblocks-social__button:active {
  -webkit-animation: pulse 200ms;
  animation: pulse 200ms;
  -webkit-animation-fill-mode: none;
  animation-fill-mode: none;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out
}

.wp-block-coblocks-social:not(.is-style-text):not(.is-style-icon-and-text) .wp-block-coblocks-social__text {
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  width: 1px;
  word-wrap: normal
}

.wp-block-coblocks-social.is-style-text .wp-block-coblocks-social__icon {
  display: none
}

.wp-block-coblocks-social.is-style-text .wp-block-coblocks-social__text {
  margin-left: 0
}

.wp-block-coblocks-social.is-style-mask li,.wp-block-coblocks-social.is-style-mask.has-button-size-sml li {
  margin: 0 7px !important
}

.wp-block-coblocks-social.is-style-mask .wp-block-coblocks-social__button {
  background: transparent !important;
  display: block;
  padding: 0 !important
}

.wp-block-coblocks-social.is-style-mask .wp-block-coblocks-social__text {
  margin-left: 0
}

.wp-block-coblocks-social.is-style-mask:not(.has-colors) .wp-block-button__link:not(.has-text-color) {
  color: #31373c
}

.wp-block-coblocks-social.has-button-size-sml li {
  margin: 2px 4px 2px 0 !important
}

.wp-block-coblocks-social.has-button-size-sml:not(.is-style-text):not(.is-style-icon-and-text):not(.is-style-circular) .wp-block-coblocks-social__button {
  padding: 8px 16px
}

.wp-block-coblocks-social.has-button-size-sml .wp-block-coblocks-social__icon {
  height: 16px;
  width: 16px
}

.wp-block-coblocks-social.has-button-size-sml .wp-block-coblocks-social__button {
  font-size: 13px;
  padding: 10px 12px
}

.wp-block-coblocks-social.has-button-size-lrg:not(.is-style-text):not(.is-style-icon-and-text):not(.is-style-circular) .wp-block-coblocks-social__button {
  padding: 14px 32px
}

.wp-block-coblocks-social.has-button-size-lrg .wp-block-coblocks-social__icon {
  height: 20px;
  width: 20px
}

.wp-block-coblocks-social.has-button-size-lrg .wp-block-coblocks-social__button {
  font-size: 16px;
  padding: 12px 16px
}

.wp-block-coblocks-social.is-style-circular .wp-block-coblocks-social__button {
  border-radius: 100%
}

.wp-block-coblocks-social.is-style-circular .wp-block-coblocks-social__button:not(.has-padding) {
  padding: 14px !important
}

@-webkit-keyframes pulse {
  0% {
      transform: scale(1)
  }

  15% {
      transform: scale(0.95)
  }

  100% {
      transform: scale(1)
  }
}

@keyframes pulse {
  0% {
      transform: scale(1)
  }

  15% {
      transform: scale(0.95)
  }

  100% {
      transform: scale(1)
  }
}

.uppercase {
  text-transform: uppercase
}

.m-1 {
  margin: .5em
}

.m-2 {
  margin: 1em
}

.m-3 {
  margin: 1.5em
}

.m-4 {
  margin: 2em
}

.m-5 {
  margin: 2.5em
}

.m-6 {
  margin: 3em
}

.m-7 {
  margin: 3.5em
}

.m-8 {
  margin: 4em
}

.mt-1 {
  margin-top: .5em
}

.mt-2 {
  margin-top: 1em
}

.mt-3 {
  margin-top: 1.5em
}

.mt-4 {
  margin-top: 2em
}

.mt-5 {
  margin-top: 2.5em
}

.mt-6 {
  margin-top: 3em
}

.mt-7 {
  margin-top: 3.5em
}

.mt-8 {
  margin-top: 4em
}

.mb-1 {
  margin-bottom: .5em
}

.mb-2 {
  margin-bottom: 1em
}

.mb-3 {
  margin-bottom: 1.5em
}

.mb-4 {
  margin-bottom: 2em
}

.mb-5 {
  margin-bottom: 2.5em
}

.mb-6 {
  margin-bottom: 3em
}

.mb-7 {
  margin-bottom: 3.5em
}

.mb-8 {
  margin-bottom: 4em
}

.mr-1 {
  margin-right: .5em
}

.mr-2 {
  margin-right: 1em
}

.mr-3 {
  margin-right: 1.5em
}

.mr-4 {
  margin-right: 2em
}

.mr-5 {
  margin-right: 2.5em
}

.mr-6 {
  margin-right: 3em
}

.mr-7 {
  margin-right: 3.5em
}

.mr-8 {
  margin-right: 4em
}

.ml-1 {
  margin-left: .5em
}

.ml-2 {
  margin-left: 1em
}

.ml-3 {
  margin-left: 1.5em
}

.ml-4 {
  margin-left: 2em
}

.ml-5 {
  margin-left: 2.5em
}

.ml-6 {
  margin-left: 3em
}

.ml-7 {
  margin-left: 3.5em
}

.ml-8 {
  margin-left: 4em
}

@media (min-width: 600px) {
  .sm\:mt-1 {
      margin-top:.5em
  }

  .sm\:mt-2 {
      margin-top: 1em
  }

  .sm\:mt-3 {
      margin-top: 1.5em
  }

  .sm\:mt-4 {
      margin-top: 2em
  }

  .sm\:mt-5 {
      margin-top: 2.5em
  }

  .sm\:mt-6 {
      margin-top: 3em
  }

  .sm\:mt-7 {
      margin-top: 3.5em
  }

  .sm\:mt-8 {
      margin-top: 4em
  }

  .sm\:mb-1 {
      margin-bottom: .5em
  }

  .sm\:mb-2 {
      margin-bottom: 1em
  }

  .sm\:mb-3 {
      margin-bottom: 1.5em
  }

  .sm\:mb-4 {
      margin-bottom: 2em
  }

  .sm\:mb-5 {
      margin-bottom: 2.5em
  }

  .sm\:mb-6 {
      margin-bottom: 3em
  }

  .sm\:mb-7 {
      margin-bottom: 3.5em
  }

  .sm\:mb-8 {
      margin-bottom: 4em
  }

  .sm\:mr-1 {
      margin-right: .5em
  }

  .sm\:mr-2 {
      margin-right: 1em
  }

  .sm\:mr-3 {
      margin-right: 1.5em
  }

  .sm\:mr-4 {
      margin-right: 2em
  }

  .sm\:mr-5 {
      margin-right: 2.5em
  }

  .sm\:mr-6 {
      margin-right: 3em
  }

  .sm\:mr-7 {
      margin-right: 3.5em
  }

  .sm\:mr-8 {
      margin-right: 4em
  }

  .sm\:ml-1 {
      margin-left: .5em
  }

  .sm\:ml-2 {
      margin-left: 1em
  }

  .sm\:ml-3 {
      margin-left: 1.5em
  }

  .sm\:ml-4 {
      margin-left: 2em
  }

  .sm\:ml-5 {
      margin-left: 2.5em
  }

  .sm\:ml-6 {
      margin-left: 3em
  }

  .sm\:ml-7 {
      margin-left: 3.5em
  }

  .sm\:ml-8 {
      margin-left: 4em
  }
}

@media (min-width: 782px) {
  .md\:mt-1 {
      margin-top:.5em
  }

  .md\:mt-2 {
      margin-top: 1em
  }

  .md\:mt-3 {
      margin-top: 1.5em
  }

  .md\:mt-4 {
      margin-top: 2em
  }

  .md\:mt-5 {
      margin-top: 2.5em
  }

  .md\:mt-6 {
      margin-top: 3em
  }

  .md\:mt-7 {
      margin-top: 3.5em
  }

  .md\:mt-8 {
      margin-top: 4em
  }

  .md\:mb-1 {
      margin-bottom: .5em
  }

  .md\:mb-2 {
      margin-bottom: 1em
  }

  .md\:mb-3 {
      margin-bottom: 1.5em
  }

  .md\:mb-4 {
      margin-bottom: 2em
  }

  .md\:mb-5 {
      margin-bottom: 2.5em
  }

  .md\:mb-6 {
      margin-bottom: 3em
  }

  .md\:mb-7 {
      margin-bottom: 3.5em
  }

  .md\:mb-8 {
      margin-bottom: 4em
  }

  .md\:mr-1 {
      margin-right: .5em
  }

  .md\:mr-2 {
      margin-right: 1em
  }

  .md\:mr-3 {
      margin-right: 1.5em
  }

  .md\:mr-4 {
      margin-right: 2em
  }

  .md\:mr-5 {
      margin-right: 2.5em
  }

  .md\:mr-6 {
      margin-right: 3em
  }

  .md\:mr-7 {
      margin-right: 3.5em
  }

  .md\:mr-8 {
      margin-right: 4em
  }

  .md\:ml-1 {
      margin-left: .5em
  }

  .md\:ml-2 {
      margin-left: 1em
  }

  .md\:ml-3 {
      margin-left: 1.5em
  }

  .md\:ml-4 {
      margin-left: 2em
  }

  .md\:ml-5 {
      margin-left: 2.5em
  }

  .md\:ml-6 {
      margin-left: 3em
  }

  .md\:ml-7 {
      margin-left: 3.5em
  }

  .md\:ml-8 {
      margin-left: 4em
  }
}

@media (min-width: 1280px) {
  .lg\:mt-1 {
      margin-top:.5em
  }

  .lg\:mt-2 {
      margin-top: 1em
  }

  .lg\:mt-3 {
      margin-top: 1.5em
  }

  .lg\:mt-4 {
      margin-top: 2em
  }

  .lg\:mt-5 {
      margin-top: 2.5em
  }

  .lg\:mt-6 {
      margin-top: 3em
  }

  .lg\:mt-7 {
      margin-top: 3.5em
  }

  .lg\:mt-8 {
      margin-top: 4em
  }

  .lg\:mb-1 {
      margin-bottom: .5em
  }

  .lg\:mb-2 {
      margin-bottom: 1em
  }

  .lg\:mb-3 {
      margin-bottom: 1.5em
  }

  .lg\:mb-4 {
      margin-bottom: 2em
  }

  .lg\:mb-5 {
      margin-bottom: 2.5em
  }

  .lg\:mb-6 {
      margin-bottom: 3em
  }

  .lg\:mb-7 {
      margin-bottom: 3.5em
  }

  .lg\:mb-8 {
      margin-bottom: 4em
  }

  .lg\:mr-1 {
      margin-right: .5em
  }

  .lg\:mr-2 {
      margin-right: 1em
  }

  .lg\:mr-3 {
      margin-right: 1.5em
  }

  .lg\:mr-4 {
      margin-right: 2em
  }

  .lg\:mr-5 {
      margin-right: 2.5em
  }

  .lg\:mr-6 {
      margin-right: 3em
  }

  .lg\:mr-7 {
      margin-right: 3.5em
  }

  .lg\:mr-8 {
      margin-right: 4em
  }

  .lg\:ml-1 {
      margin-left: .5em
  }

  .lg\:ml-2 {
      margin-left: 1em
  }

  .lg\:ml-3 {
      margin-left: 1.5em
  }

  .lg\:ml-4 {
      margin-left: 2em
  }

  .lg\:ml-5 {
      margin-left: 2.5em
  }

  .lg\:ml-6 {
      margin-left: 3em
  }

  .lg\:ml-7 {
      margin-left: 3.5em
  }

  .lg\:ml-8 {
      margin-left: 4em
  }
}

.p-1 {
  padding: .5em
}

.p-2 {
  padding: 1em
}

.p-3 {
  padding: 1.5em
}

.p-4 {
  padding: 2em
}

.p-5 {
  padding: 2.5em
}

.p-6 {
  padding: 3em
}

.p-7 {
  padding: 3.5em
}

.p-8 {
  padding: 4em
}

.pt-1 {
  padding-top: .5em
}

.pt-2 {
  padding-top: 1em
}

.pt-3 {
  padding-top: 1.5em
}

.pt-4 {
  padding-top: 2em
}

.pt-5 {
  padding-top: 2.5em
}

.pt-6 {
  padding-top: 3em
}

.pt-7 {
  padding-top: 3.5em
}

.pt-8 {
  padding-top: 4em
}

.pr-1 {
  padding-right: .5em
}

.pr-2 {
  padding-right: 1em
}

.pr-3 {
  padding-right: 1.5em
}

.pr-4 {
  padding-right: 2em
}

.pr-5 {
  padding-right: 2.5em
}

.pr-6 {
  padding-right: 3em
}

.pr-7 {
  padding-right: 3.5em
}

.pr-8 {
  padding-right: 4em
}

.pb-1 {
  padding-bottom: .5em
}

.pb-2 {
  padding-bottom: 1em
}

.pb-3 {
  padding-bottom: 1.5em
}

.pb-4 {
  padding-bottom: 2em
}

.pb-5 {
  padding-bottom: 2.5em
}

.pb-6 {
  padding-bottom: 3em
}

.pb-7 {
  padding-bottom: 3.5em
}

.pb-8 {
  padding-bottom: 4em
}

.pl-1 {
  padding-left: .5em
}

.pl-2 {
  padding-left: 1em
}

.pl-3 {
  padding-left: 1.5em
}

.pl-4 {
  padding-left: 2em
}

.pl-5 {
  padding-left: 2.5em
}

.pl-6 {
  padding-left: 3em
}

.pl-7 {
  padding-left: 3.5em
}

.pl-8 {
  padding-left: 4em
}

.pt-full {
  padding-top: 100%
}

@media (min-width: 600px) {
  .sm\:pt-1 {
      padding-top:.5em
  }

  .sm\:pt-2 {
      padding-top: 1em
  }

  .sm\:pt-3 {
      padding-top: 1.5em
  }

  .sm\:pt-4 {
      padding-top: 2em
  }

  .sm\:pt-5 {
      padding-top: 2.5em
  }

  .sm\:pt-6 {
      padding-top: 3em
  }

  .sm\:pt-7 {
      padding-top: 3.5em
  }

  .sm\:pt-8 {
      padding-top: 4em
  }

  .sm\:pr-1 {
      padding-right: .5em
  }

  .sm\:pr-2 {
      padding-right: 1em
  }

  .sm\:pr-3 {
      padding-right: 1.5em
  }

  .sm\:pr-4 {
      padding-right: 2em
  }

  .sm\:pr-5 {
      padding-right: 2.5em
  }

  .sm\:pr-6 {
      padding-right: 3em
  }

  .sm\:pr-7 {
      padding-right: 3.5em
  }

  .sm\:pr-8 {
      padding-right: 4em
  }

  .sm\:pb-1 {
      padding-bottom: .5em
  }

  .sm\:pb-2 {
      padding-bottom: 1em
  }

  .sm\:pb-3 {
      padding-bottom: 1.5em
  }

  .sm\:pb-4 {
      padding-bottom: 2em
  }

  .sm\:pb-5 {
      padding-bottom: 2.5em
  }

  .sm\:pb-6 {
      padding-bottom: 3em
  }

  .sm\:pb-7 {
      padding-bottom: 3.5em
  }

  .sm\:pb-8 {
      padding-bottom: 4em
  }

  .sm\:pl-1 {
      padding-left: .5em
  }

  .sm\:pl-2 {
      padding-left: 1em
  }

  .sm\:pl-3 {
      padding-left: 1.5em
  }

  .sm\:pl-4 {
      padding-left: 2em
  }

  .sm\:pl-5 {
      padding-left: 2.5em
  }

  .sm\:pl-6 {
      padding-left: 3em
  }

  .sm\:pl-7 {
      padding-left: 3.5em
  }

  .sm\:pl-8 {
      padding-left: 4em
  }
}

@media (min-width: 1280px) {
  .lg\:pt-1 {
      padding-top:.5em
  }

  .lg\:pt-2 {
      padding-top: 1em
  }

  .lg\:pt-3 {
      padding-top: 1.5em
  }

  .lg\:pt-4 {
      padding-top: 2em
  }

  .lg\:pt-5 {
      padding-top: 2.5em
  }

  .lg\:pt-6 {
      padding-top: 3em
  }

  .lg\:pt-7 {
      padding-top: 3.5em
  }

  .lg\:pt-8 {
      padding-top: 4em
  }

  .lg\:pr-1 {
      padding-right: .5em
  }

  .lg\:pr-2 {
      padding-right: 1em
  }

  .lg\:pr-3 {
      padding-right: 1.5em
  }

  .lg\:pr-4 {
      padding-right: 2em
  }

  .lg\:pr-5 {
      padding-right: 2.5em
  }

  .lg\:pr-6 {
      padding-right: 3em
  }

  .lg\:pr-7 {
      padding-right: 3.5em
  }

  .lg\:pr-8 {
      padding-right: 4em
  }

  .lg\:pb-1 {
      padding-bottom: .5em
  }

  .lg\:pb-2 {
      padding-bottom: 1em
  }

  .lg\:pb-3 {
      padding-bottom: 1.5em
  }

  .lg\:pb-4 {
      padding-bottom: 2em
  }

  .lg\:pb-5 {
      padding-bottom: 2.5em
  }

  .lg\:pb-6 {
      padding-bottom: 3em
  }

  .lg\:pb-7 {
      padding-bottom: 3.5em
  }

  .lg\:pb-8 {
      padding-bottom: 4em
  }

  .lg\:pl-1 {
      padding-left: .5em
  }

  .lg\:pl-2 {
      padding-left: 1em
  }

  .lg\:pl-3 {
      padding-left: 1.5em
  }

  .lg\:pl-4 {
      padding-left: 2em
  }

  .lg\:pl-5 {
      padding-left: 2.5em
  }

  .lg\:pl-6 {
      padding-left: 3em
  }

  .lg\:pl-7 {
      padding-left: 3.5em
  }

  .lg\:pl-8 {
      padding-left: 4em
  }
}

`;

