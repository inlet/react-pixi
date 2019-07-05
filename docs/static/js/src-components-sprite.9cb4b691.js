(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./src/components/Sprite.mdx":function(A,g,B){"use strict";B.r(g),B.d(g,"default",function(){return s});var o=B("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),C=B("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),E=(B("./node_modules/react/index.js"),B("./node_modules/@mdx-js/react/dist/index.es.js")),Q=B("./node_modules/docz/dist/index.esm.js"),h=B("./src/stage/index.js"),e=B("./src/index.js"),w={},i="wrapper";function s(A){var g=A.components,B=Object(C.a)(A,["components"]);return Object(E.b)(i,Object(o.a)({},w,B,{components:g,mdxType:"MDXLayout"}),Object(E.b)("h1",{id:"sprite"},"Sprite"),Object(E.b)("h2",{id:"props"},"Props"),Object(E.b)("p",null,Object(E.b)("a",Object(o.a)({parentName:"p"},{href:"http://pixijs.download/dev/docs/PIXI.Sprite.html"}),"http://pixijs.download/dev/docs/PIXI.Sprite.html")),Object(E.b)("h2",{id:"usage"},"Usage"),Object(E.b)(Q.c,{__position:0,__code:'<Stage width={300} height={300} options={{ backgroundColor: 0xeef1f5 }}>\n  <Sprite\n    image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png"\n    scale={{ x: 0.5, y: 0.5 }}\n    anchor={0.5}\n    x={150}\n    y={150}\n  />\n</Stage>',__scope:{props:this?this.props:B,Playground:Q.c,Stage:h.a,Sprite:e.h},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKZnAIVw0nQ2V2g9OABHISQUWImBcIg9goOcfsXm6NCjTIiiqMkVRsAY_D2EDSVSJNTV2jBVBdBRY5TiwwjEixdhuCY9YogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBnbSABZDPYAA2QzjPWMBgIAMW9aBEm0_hnEOBEHUwGChH4JYiGoSg4DMhEnOrFyaGcCAsMudgAEYrJM-RJOkqYAEE5mU9gIyg8gbCgdAw1QjllLEQroxkdgUUUmBuGAbCFKxeQtxrYASugcrggAMgG8ZEnmShml6sqKu4Ga5TAZDJQGVB2nYAB-DY-rDCMqquSb-tQTLqykGQqzfMwYXVY4YDAMIoCmbbqtqo68uXasE2EggcFczIUivAguprWtCLovMuAmFqkx0nS0M2CAUkICGobQygZm7VA4BaqCPAlbZELaDBHCgIUrh0mprpSsAAFZUM6ldAcYFj-loOnAazOi-BAQhbnuR44CTc08nNEZ4AtAAmHBvVcLCexGOAPkiGiPnQGZUBwAZJDsgBOJM7JS0WATQHAVcKEAWcBuA4lgTH2CwEmcEppYvPYHT7Zps2a3cEqhRal3KcO1nWawFqUsp6H3YsRJg9D_2A_YTcWakYG0gB2tJA-r6fr-rqpBe06zC_EBKOo2i0l48MNC0ChgP0Bg8Muj7RPlM0JNQOv7SMEI7GghoAA0GkbmYICwCB_zgFu26maCB0sUb4AHgdzQIWex9tS60FYVx-ncKU3XaMAPE0SQoAgDwy43reaHHxioOgkUdWg5wAH0tQaZxoIAGRygBNR-dWvAApM89hLCoUbjgD04RoBwEkP2FGK9W7XwnMhVuM4GioGvEIWWGRQGcXdB6TYUBYTwInkxGCQ8ICuRPtgjiu9wGSC6Locg0AMhX0ElBNA6gtjahgKwCIlAoB2BoRhOhk4WGr3tFBF6U9KCsC4NQsBMChCyKnC3Mw2V2CoGEDMAqD1uA1WAIdMwxhTDmA7uacxFjLFWOsTY2xNiigdyTt0Bua5qAugjHkboExbCcHMKaSUlpIhvnYCYkJ7AAACeQ6IOIcYDdRL0dFVT0U9MJrMGZERIjidA4NgChzDqY2OAdYbwwIC1PJ_sO6FMBijNGGMsY4zxshdAhNibOywGAMAUMoaoViVUms1A9T41KcACME46BTgyEsOIqAN52CSfo3pfSazSX4X-ImKRHzdz7mM8MXQyxyiWKIvZwTKlLIsCs2AOB1mPnsO4WZ0JLz6G0lMu5_gTlnJpluU57ATmxLsf8gFgLzQON5P6KS1AZKwJmDPeYdgVLAHWI8Y4_I6D5AhesLJEwrjSOhcvHAqBQhEECAIEyFhimEGxdPPFBKiWTMkhYJFOIEhjIIH0Px4yLgCCZKgQZyECCUpRjC-AOB5pSVJXsVAABVVAYU-UCtxbCkVC0TKIskEg8wMQdjYOiA1IiwpVrrEyGAeVQq5ZeH4Sq6sSKjmFnTC6Zknx1yZmPmALYiRyCwA2O4NIcADXViOTqVAriMwEHsH4GcyUcWmpwOaqAlrzmlX2ia6lgJ41xzVVs_uNSlpwCWHAII1xbgPBgeQzQOATgjFQETDs0geHSFONAzNOAXrHziGjfAxAoBMlRjm5Niq4B-HmEVFc28IDxDHfcIKgq8WxvFRYMIERgbCj7cK2dK5MV4BXXLGlxK52-BgHDClU6FXCp3XSt64xMjozMmGflx7o1rovf2eAGRWAwC1JkHEM5ryhA6RkLdMbhBxpXF0OA_DIHUAA2eklK4XJURgLcmZ_gAOPsBtjHYjSCb8NaVG6lhLd0rg9eKAQ15rpChgGKXZKGgN7qQhgaCQ95yTtw4q1DNY4MIlcj3HKOVqMWpXLAFIEonYsdXTRlcgphYCCntdC4UlI1Uv7aiAoe6B2b2yJYWI2x_33pneJi9amujoHfpQDsOnRNmv0yuJFsiYBjB8dmnscbcj5s4M0WByjsgrlsyMK4EYoW5r7AOAAct6GAUzHRuJoKFo88zVIXvORCqY84CoBYANpQpizAAAuizCAzQIwpZmipJp100DZCqgihLNYuisoEGCgOMdAbr03mOmgUZqsWBS2gWi8nxrsAABKWD1O_RDsyLwwD-nuwGxQ0Eb2PjkKF7BeC8GKD5lbxQ9jNCXvMdgAASYAO2YD9fnEoBqoQ5jH1zBEfbPVIshqy2dmEXDcwbcYNM2ZNUJt_Q28UFmwSaxKHWPIDkGUspJaujdUId0cVwvixYDdVwAAcUNxXkrvXZVH3LeU0CuJolG4rqDStlbjjRWjxVGquKiBkFOOUCEDcG_QYbvXJWp-FswhjnRYEEqKxazJTxjf8LD_zA44CVfWOo0Dr7cwqTS-AnAOoD5cJwNpxIcARfTthaD9g8vFecMlCrmAauIy33vk_F-b9P4_z_oA4BHJcsNZZWy9gevleq_VwFgHFgRXQFoAIfzj0ACEUuBBvvQGrKSUBQjlH8xyL3OujOhARBGCM8RnNQri0VHX4C09LAywObLVx0tQuy5VJYBi3yc49f4OwTjoRYBAugOw6dGeZiqxYR-H3_AFQJQkdYsxtEqV712x3krgvOByq5M8nf7v6AAOrQCgDjggD1281haxfFfaJUAoJSGgjBox83--18URDmjmxDPYE4pYX6K17CVyJHx5_IflfQMUAHnPEt2poFqLgy_V-EYQ5QQDJDI35gx4BLDo5LCOboyHKuDNBoQqTeJywBb0o1jIESz5RD52YwS9wNDNqXaxDRBLQRgbqQEHolLl4sw-ZU4Eg4Cd6vK5oszy4wFMEXog5oEWAYED44CaraYCASzhCUBLpTAqQ3QCKMiO5cF0E8F8EZBpZGprRyi0TCgrTaQogoztDZbbScH4i2A4Ak4EDBaAgFQMbDyULEofCmi0COA0CuDlb-7cFzA4AlwwDx5mEUJUICEXboBZC2FEQOERgYEC6JpbTa4YGGHGGYBLDIFnQXocJcJag8J8ICI6FSESr_5OEzDx4YFHJOJpEWCf62pOrahcCSozC-G0Ai48Kw6khdCsDAy0B1E8L-HYAEDi4XrqJQRkH7qHoEBwEIEFQYGoHpFIrhroCeqgaJSSHNYFbPqsCw74AUGEDsCB6zTo7sAAA-mxQWNRouOAG6qxs0G6HRAcWRoYdOGQFx-QSUpB4B5BfR8eRRDKaq4xkx8BXqEaK4-WhU8xixihaxKkRqpxrM5xchAgChHx607QKhL47A6hEQMwWhBRgOuhYxlQkx8A4GaMa0aJaqYAUeA6hoXhK4HhFhVxPhfhwE9hzojhdBIRm0dA20MRdBkRqaehYuK4uRdO-RH-aBDJU0TJIJiW6MkEG0gp5giBHJRsouIGo4zujAUiSiciRw82DILUWRnUPUoRdA8gOccw0inmAgXURRjqUWpRzS0QJUhWAgQgJK0ItpQoaCLkwphY6MqyOAGQdpEYxQZ4jpRwpwvQtpuYaAy2q2TiG2OA7-gB7plyXpQoNpdp8eFyf48Z_uaZzplAfJjueRGSMAABnRQBOyU4DOs-NAzOEaAxoCSBdBIx3xBWweHxQ0xZGQpZ3-oa4aaQrp0h-hPBRyVxRyQRMhzhrhTxwOaBZpIaC-CQxOQyBZgMwx-xROMqc5WRcRgMZJXhOAlJNh1JgRw-LJ-hbJ0RHJORdBuZdEKJPZcsPB5QqIlAiQKJRRg5rpXRewPaEK1Z0pdZ8RBWrB7AzZrBOAPm3Zvi58bWK-QFPmvivWCI_WQ2I2gucA32-gSw7QUFEAOBbYTeQ47AgQIQ7AxQCFo2jBKFNAxQr4LMtWzuw-K4zxTu9WtYXedgwA8uAujBwui5cCHIaEXQYALU5Aj0Q5-hDBSGcO5APFccJpHOkkTiMpmuc8KkUKpqZgclmAUOMOouBU6lt0BAsOkkF09oOl0OBEeZ-cSghcPEfEFcgEugIEBgYEJCUElgX80EZ4zgSwHhreUwQiXEkgkCAinojyl84iYpNqvl7o9CdOrCl0deuC5ENEeZMVEiZC5hXhOCtCUVjCzCAgyVYprRDenc7AL0BV_RxVBpypU4SwJVEKhKkyoMEwHhCSEVCVrhiiMiKpeVpCnimmOwSwnizVCiwwlA2w8CRiJgfyQKU101sS0EbwraxV3ck101K1_yIKBl3Ol0UERySw1-DVeATVcwnl5C3lx1aVxKPSXObC5VMwhpKp1Vcwth9IR49pNVeghVh0hlYpPVWm_V-azVG1gk6i14LwUQ0KbRBULlblzgOAINxAswlgbR50m19o6i_hNJ2CKkUN7lOA6NDhyNQNEOAA4pkDMDYGcJDa5TjSTbMOTXAATZdOosFuVs4K2jALBO4N0FjVTTDczc6KzbEOzXBM6AzajRDtBJvJqrAHjbSZTdDTgBLcKLENLXubSaLVMOoozGxHLTjVrczFdYzRDojYVdzfLcbaIAbWLaKVYNAAUHrVzVYDzTgJpsfDOPberW6TJHqPAHiKbTjd7QOh7eoiKCjA7djTDSHfMOZcoEXP5TEIFQFqPLZdXKBOBIJLYMzVAI3ETL4QOrxHAJnV1RvhBY3PvIfMfKfMXdvF1R3N3pmgPOQqPF1VBDwvoANhiRkIFvmgQAAGrxAMgZXCIlrDzN2cBwCuQLRoxLDn6QH-AADSRug9XE-C84RCqiltGtEO9gA2DQ78WoIoZ4wWBU7Qe0YYLcxisSYoR-YeQWcCMSBS4SR2TErukoFSoKX1ntk8d8D8j8B9zgZ4IoPdZ4WoBUa-aW29u9-9h9hel6NO6wN6TysD7O1YIwQoZUOUhCfgVOaIyDCOaD6AlgV6cAcGRA2DcDKD-DPdtgJ8sAZDyDnOF9BSSRGlUwLAkUcEyQlAD-UwIxYSzgBaXMdwxazwrw7wnwkgRAsQfgRMJUUQqAUVZo5og8w85okAxKkgHgRMp8rgVkVQnYgQnSHSHghjlMdkSY5AdkujkMAA7HZHZOKKLEjqLM464JTClOKDRDxInZoAAMTvyaz31hKP2zzP3cNv1B3i3f3m6vwfzfy_wAJAIgLwr96YOuBXApTioeDhARA8qAhXDiH5ripxAlQwA5RwBw1g35PxCFMS59Bgb7IHnOS-4ZA5Smh47Q7AaxTNMCCTqNPVg2AECtPijtMJDipoB-5mhsDJQFO4PsBRBwDbAjOdMWCDysAiAkziqCj5BowbOGp06uCaOs44MU4iDEGQbOzioWzxDJQZPrALN2a7PViojuDENCikMaIdPiqyL5CHN0Piq2wXPrBOw6Rg5gqMNhIDar3YIBWGhCiGiji9Qzj4heJtF9DdC4K8MdyIZ4XdAHoTDYK0AN5ot7BHD8jRKmKxLhI3rehMQojTgpBoTziTb6BCqUvUuyjABNrm1oubGlaQDOjoBoSEt1YzEdxUubw0vAB0sFC8vhj8vZBoRktpBssSscuxriioCyvqWv5oTkBCBwD1NwxoCUvUX1YsVcuotdDhMb2f0jgEDctdDfSRCw46LrBMt_RCripQTCvEslZyuv5LBKsO18sBs9D6uGuaQFQhsCuXVxZr4_ERhBuulV3tZHb9ZBvKSzQwnKYzjGQPLMs0BCrsAADUcobMJE2FdgN2-Frguq9LSwKQIghFAApHABRTEbPOm1EF2TGTJJvCkHDmlkGw7rMYVHqxFBG2gKBf2ygXkHgBGOOwa0KEa--HRXKXVuYBa0S10CKjKA0N2_mfLjO9mesCmyvj610DBURH1s0FuyK0sO6yyyE6WytBe90JW7hfhWm80MUHe2ixRQDqaxqpa5IVXhDpAHdBkC60PiIBGH4HAAvY-XLuAi_Z9O7iblE7_e5QA0A1qNrvLq3TQO3RgLAD09lnHpJOCx3C2skMZXdLfYOMyL_uw_BC7tw1e57N0KQeTXiOpiEMypOfoJyRSw_ey0xE2sx2SPBKh4q6KZxyq5kByzJ3sGVPpaJ6q6E_rgQGhM6CMGpyEu_SjVKJPUtCEJdokMw7pcLj1tewiNAap6LtPXZrDiCWex1huXgTgJJxw6h_JREEdmrHANIv57PDqGAIm3J_JqDiuO0DZ5xxokEDhdW14p2z-xJ7YFJ4kKh8UGhSW3KI21MMUK2-21yalxx_JusOuemrkBUVkNCG-pmG8Z3aew2bp4sXDJol0GeA1wQGLvDsshDvB2KGFG-u_LYCBJjSNGNM0HF_JhcSNzAGNyiOkEcMVnNCZ9QC3HEoN_4IGkMWV7NwiDgMyGt3vBt8tLoXBoVLAGOAVDpEqJwLWPV23R3T01cnQCkBMA9xAMW8W6BeoskQVIRwQMRxMZ3UOyO6zAm_wugLDmlskaXoCQl3p6LvD7wuR_1wHAm9-yp7D6jwj5mypGd1JGjCtM2UN5NjIot-Nyt6Bc1pF0d10At0txN-mbwvZ3j3AmjwQOR-7E1lDwVjj21_j-j4T-tyT0tGT8NPB4GnT-vgz3-NQIVuz8j3Dwj_HoDPz4UWu9WKaRDsLyjIh3Dr5-hwb4ONsUxBwY7uiQIDkFTwICMEzIiMygFutNMg1PMLmBdn2BkCQ_J9WAm2b3LPb472xC55j7C0cBGDd49ypPd494wKrwOEb-9zOF95wL9_9xDoPkn4b0bnABD3ln-Q51zzMIj7NEHxlhj2vgHN3X3VHvmYd-Fn2E5yj6X7z9Vvz_z0B-OY7uogFj3s58n_nz7pB_7hB37i52gVd9H6OLH87N9094nbAGn3gN95nxH_3wOKlqjxAJDyKTJGqQ7ZXyXroQm4HhndABGEf3HhHy8Q1HP0f25i_gKyzHX_3Y3wr3UQTuwDf3RQ8q5nP6X8oAEXWCjAHzwowMezZJbKGVNw_0LcsTa3Akztx39quPiWtnRymBH8_qXiSYCzBTIHFN4qAH0t3RiBItMBv_D_lcAOxQozsnEagcACb4QCy-QrSgAwKP4cQhQOXcrgiA14P9e6H_UAbZ2b5QpPKmHBAVbnia25LAzAjvprwAHdAa-A3WMn-BGBECfSHXZdkiyhQMDaBSwXBAdiYEl5WBt2DgZH24FN8xyuvGSqgALix0CERCMuGoCTraA7KNcMCB_XUS2AJ6EvE7oVCPYaQ-uySGdp6TfQCBHyHAZJDj0iFZtecpPOIp4Ihy2BUOBULhuoEei-dYEIXeYLwWEI5sUgHwNPBGDSFJIs2aWNIVwjY5adss69RIdbXg6IcCoVABIFwlM7JI18MfZoVnRUhdDWh1ANAuf1aaZBEggXIYfBAXb8IoAt_JQQm2SHcMJhLQvnO-Cz7MoVIJvfPgsNgBLCniCg1ARMEwTI92Afpb0ifUmF9DzAH7ZLiEHMBjDOGRwVDpRXYK98JcSQ8uKAxjhdCRUQoM8BKHnaq5HoMw8uGllVyl4kCODYHFVyA7sB_hUQg7kCJBFHEie0bbIC3E5x1CZIz-FSLGlcjmBkkEYAIQOziyB5sRxAgkcJwibW1t8u-ffJgiPyJJHo14IDBqzuIYBRgb4OwTxAYTUAmEpHJwdgBcFVw9AqdEhGKGyqkdG4_iC0FyKkg5UuqMwXGGAg9B0Ioo2wOiKPE26hVfAEUAgLoEgCzh4q-CbUbqLhi1CjOtrTchdRUiijuROVODkaOoB6i3w6IqYEAxFDOAGgOoI-kpVxjAVO6S0CkTJGgg5R7Ac9HKETWnzBYcoeoM8Klh9GoAws0dSytRCOR8ibKrglOg5TTprwkMm-UugfGgQV0z4rWaupqNrpdw8CDdYeE3U1E3xyE5Je0kGJDFhiIxUYs8EsFdHujPRS9PBFlRtGkd16SKYppsAnDPg3SARWkvTRtaS5nwcOXTuwD1CzA0i41UJFizyARBZQlGCZFygKSSpXMyBfavsCEiahzQwYQJmKzE7AAjAjLYKhbSCYXim0MtDILq1VrYJE2npeoPiyvx5l3k4rRTkxB8FLDdWaedDNsHWo2s4hpnQco-xoARY7CDhF5AkBAlRt_WArVzjmIgrucawD4l8QISyEiBZ4gXYLvhPmBhcJhcE2ktFwvTtA5s46HIP2zqqZhSgOE7gc9klAhkFeW2QithPIm1AcAW3H5GgRj5CAm2QJGcSeFHBkTxxGQAHOf2EntEI-SKU8Mi0NCElNgOQNRtgjsoY1txgMOSaYTrFbk9W4oXcjxP9xaSHC8eOSXLG7qSTtJhyZ8CeytRqoLYak6HHPFraIl2AsAN9FnR3IzFUqnhSwn5MfHpkbx9kkQP1RQnZAEJUAECVVyRQJFH8NAYcJKKui8IgMk4iwIlO4TpT-E6ueKWqihGfi9JTfPZhuwCn1jxJelearEBDoiA0EYAiMHJMryUcJqBSNBFp18Q3YG4SRXKQIjAkf0IJzIbKb1JSL5T-uFoq4tlLQQRBeplgDKcOgvRZMSOMAIVEXiEAIgDWnpGZDgGCw6gtQ0-Q-j3URFyhYE6AJPKTyUIpR4SgLC9GELRRaR2AHYj0cFloyXFpMOMOiFlmxTBjQx4Yx-JGOjF7p-W6AAbNqIanCDbw9Y7FAZMsIgywZKICGZx3FRW9DoHI4uHmXapGkBRQEIUZmJFGagJR4kcHNbVKoFR04Rkqku9RXzD44i8SCqh1SnAFRSqCtSqqCHBTW03qz1SbizKep1VtxaiCHPmAOrkIEkKka8BSG8oAiXh1tR3gPkm7pw4Mag23mKHC4a47ghya6JnhXCKlHqtVF6mIGAAD5HojACWfmilmsVwEAWXitdBah8U0IA-FqAPjQibg9SkgLmfzK6gUcUGpNWEOWgy4cMssBUYoMLMzQvQIwB2M2QhjLKfQ2GmXIORbyjneV8UYWEHH9n9TylGKcsuYOzLRFmjuiuIQ6jMAeq3U2Zr1PWejH5lLAyZaMiyrHQCrQJoJn0ACOmLxm1xGIZ7PMeXRPhFjN8RddAD4HipcAjINYszmSAs7XQrOWlFqh6ACw10iqgnGgHYANEehF5vXAcW1LCQ5QN40AA5p6gyRTd4AZ4iJE_WAAycBpZo9ROHVAbrAKmCNNotpDvng0G8MUCwCFO0ghTX57AGmmTViCTp2gP8uml_L5owABaCIDms6G0ggKwFQtTml_MVpS1o5pk7SAguVpIKpJuVcVPbW0j20v55tbSObTwW203arEWgAQuIUpBcF4qAOpujlA0Kv5kdZKO0EYUxQwO1tM8O_DPDRjgslgZwAVHWHG5w6HIC4udOTyFYbxgWI7JniggEcJFeeI7DAzXkF8FFZeS3nESo6NBUAnUo7JlJXEnyQmZ8sJhfMJrW1w6j8BoMFmkHAN3hrUvRfYGsI0h82f0PChSDt4apiIh82JAlEkZwQjgN2SUYEmtB2BigFMhxWRRXwch05ISBTpK2lYzghWITcJZ4vU5_jDFWnNCAPylmYsIkF45TnpLqljgFeJrTOejHE6ecjAWrMrAK2taDTzuYbYyTAHCVBFZ43_QcPCjOx6Sh8HTEEuojAC4ijhnC7hbwrSwKLBJc_UqdWBj4D4kganFroVBx59KxexPJYa-Aj5N8CofSpqc-FaXCdtejuIAQr1dJIpn8LkJpIGyrabBL2SIXxFp1zC9ANCsoNeX6m27W1spMuR2tDXMWWLEmwDEZbPH37P8Iuty9AKBXWUqQ3l4eSmVUU9x5YFe_s9AMvgKgQr4ViK9aMipYAIqhkMaVQEIM447RcgUU9ALCrAEHFF8s5PlEiq0UvZw8TKKAOSszBoqqVbEmlWSpXJ8psVGAXFVFxunIiiV1WJvpgXHnQcbl1KwVTMq0qMrgVYqxIIsQ8A4rLBPKwlTrz2Wqox5SQXxC8DHRZ0AsgeOZVyt4ER9plMqrSuCoHn6rm-j8R6I_GlVT9fy8ysrkapdZI9ll8Q1AY6pNVqqJ5LDfTqiQvTuq4E5q8vGdhhXWCcyJSngaB1sWxJ7FDSh0O2WPm_jYl-QhJVHRSWStlOLqN1ERjmajhhgTeYxZdCGmbsTqMc5pfMCWCZryA7qWAGhPArbwIwgeQPEdjQpnhuclQp-lcO1YCsG2TbIrm2zzZSLT26E-tYHnDp_L5g2WNClLL7WbYqA0OHIM_nwpQrop_HU0OgGSDYBxudgUMhQKUV8SO28wKrmYosVWKtQ46nLAVErXVrJCZU53EdhsHozJAw1UaqmJxluDU6H9DuAaP8r5peq2wFuJ-oUQDU5gLcR9Q3OHojwW5go-yu3MEhljcC2yeKso0g3EIO5w6zMPFTLoFie5Z7fuYPN3jDyi6BdaANnScD-A8A-dQulGoKSK1XM9dQUOM0oEN9cKm8YYZxKoBCgLIWQXRTEo5ZXimNDIYpRuxYq3CalZootX2E3j5poIlAcZtfw_4gkpltpAqGlgdx6rohH_JZbytWVKCoRrG4HLsOx5lcn-p3OJSkB00jplNKkI_i4TJAvBHwigR4YUUM2C9jNmm07tBgs1-qrN7ANLEf0h7XjABBWW4aMNtLjCb-rpVjSpvlz-aDNTGboAmyf5I9h8AFYaBpuY2ncKhioV8hDh8CmqsA8mhvksEtXJJrVWAKqBbx0i9spgyQfLYVppzsAStNUa1YkAq07Eqt3m1br5pJAtAAtuw3TeGv02hrb1jFVjaPz9wB5kkF_YjSAOyKpbViGdVwMFljzCKwaEYYLPhmkk2DlxsSJIn7kkbOgBNCWqtiE36wybGNcLRXNfT3ns1ZNNALxQIxuBCNHgIjPAGyHEaSMSo8QU4HgDkYKMAkyG1Rl4Q0ZaNJAOjPRlUGug6QjGJjMxhYysY6RbG9jVwI42caixXG7jVwJ42ogNzR4fjKyEjgTUXj-NR_ITWyhYrqt3AYmnnHUtsDnbC2s8erW4X65Qin-TfM7Z53p1TALebOhXhzr7gK4PA12w5lzu23yNN5Hcbri6Ca49ME1p8szapup2G1rawPUHqR0HbrAT6raf9eKnaCyp80FaZaLrv12U830X8vXYMGOzhBzdJu-3jbst0XZ7dniC7PsHyCYBzdREJErroiBJ48AsJD3W0FkZU8A9vu8ZCHpKasjwgbu-iLroY16AqInHKAObrj1-59gyeu7anrCHp7xmGQT3dnvj2G789fuR3bHoz0ZAXdUeuREXoyALdzd_QEpB6i0x16-ihe3XfXsIAl7Nd7e1lIKEr3u7vdgevANMgRBJ6B9oeyPb1yr1j6g9Zu6fX7r1QvgTIam8XXov4ZYDNNzIWtulxY5ZduGD27oIIx5hPBWQYjBWA0CwhYQyWJUf7RaGQ0g6uGYO0WG401h2Qn9KUVwClCTDZBNYHgDwClBSh2RXASOSmLY3QDawYAmsMAAiAlDo60oxcHiB9CbS-N34_-qyETo06ctPO3naTmEwjW8baWyahjvgcvFoRSdpiQzjTt8HmB3-DfQNQxyWA39-uswoLhnqFTmrZBVUZsnTtYOM6ItCktVFQBmDJAyD9PMAbIPlhCGmdH-FzYVG4PjM2DRggvNMOsxqob0rmNnc0FraaJUA5oLnYfLHo4sCgncfICkBjY3Yt9Ge5JS8pkgcbbeaAbjalik23a5Nf_dIm5xZg49bDXG2gHYGdXab5tXh-wz4dT6fc8QNUPSM2UCPxjgjK_UI09yTDTY5Q1gboFClz3JAZ1Bh2tr-050Z7NscLbIwLqu2vobtXOzbJUDmZricW_AljbaiiDmh801LWgDkDM2cSVoxbd2O0DxaXLUoJLdgKLELCcagj8AJYLW2ulwt-jTckIGFuSDmTd8Axuw9EeGO9Gt9FYrnZICKOh4SjGe-oG0Y6MQhqA6qtxPMe8PHaWQDXZFuYB7jXCcgX8UGMynwrd1cKn4jzHIhyA2ajxCIKZugCuAZH-sT9GdfupZiiCWY_8ZwJ6JcL5D8sEQhTYkfS2CaL0VXLKQr3EM2Soj3GlwjYDAARKIsgxxY9ZMxMRLpD8W_g-wHUCVG_AtvYwx1yO3fFkTJeAqCIcuq1zlAKotUZoGoDJ025YENfPwHjFHh-AVwfgD8GLDVAMg5oH8GSEZAgBxU_Ae6f6KQDLYQALsZUyFHWD8BygerCAB-X9AKn-AOUBqHhE9QSnPUmAMkA-S975AkWAS4U38FLCqnqw_AKIMa11MqBy4o8e0xYHVMwB5g4YGUUfIVNKD1TckAU4qYAB6KUHAOLCq3SmVw_ASUSGf4Dhm7IOAJHDgDsgemaw_AZDe6ZdNWQUz9sDM56ZABQpF4y8BMyAHDOUwcA1jSM4WcVNYbyz4ZnACqZjMXp-AOdcjY2bzMpQazKUaM3ujjPHjpRPI0EC6dDMuxRYLsNA62cBj8Bh5jZ8WFWfTMznMzxZ33m8047mhNEIwBczgAjP9nYzhcEpudNI6NmXYaUZs3WcHOKMrQjZgA_meXO995Aj64czlSfX2jUAeot9RmMMAS72Aq1AC7YliQIypgthPUcSUuTHz-GlwRZIfuEYn75YXwG6AiHNTbAb9kgVEEEAkb-A_cMCT6T6hv3mhXzp5gpGSie1H7Xt72hWMhZgCoX0LmjB_fM1wusmCLAS4ixkGx2SA4ML6j6PWJAtgW4YHwNcZEHdMFJAL4lyxGBM1GdzMN-Yo-DhvQ0vhNRsIP3vJmMJjAkN65gQHIwRBbnRgzddYMhFoiHNH4Lk7IG5NuSIScYRVMyyeffSyZgylpKy31UMtycTLw--cJZdinWXu8HlqAMwy9LZAvLIEjKI3FstuTcqkkJyvUqyBJKZ5ECeOo3JvGj0IGe9A-q9M9WWcTKLreK3HSgTtU7g69CTfLIJiJp_M6mGCeKRBVMG5iFVz6OZDDR9RXSCDGgBLE7CNWyoC7RNIicBWeHE0KKy_KdyLVeaA4e0Aa-ystggC9oUyRNKSDqtWC9lnOCTUzyp4dWHwLVsqntFc6ubpuVV0lTOTZWZghr53Ea8sn6u0r6Vn0Sa11b6gzXbrkm29I5JWZ1X5uq1sq1tYlz9W7yQgR8i1LBQSaesue0jHBnzIbW7rZUJYAY3IxrXa1xY9rHtBOlQ2uga1tCpNKODTJn8gN-0JokChI2EtvXecGAEeEyybDiaVtVuscO3oPgOpVWNZVIlbWTp5oFKCTcKVqBKbx4AUugDQRqAIweNmGxOTJvDwUQdgdaBtZcKjg1r3N7ADdYhu-I1A-KsWw1cTQ5QV801uW9gD-tGI1USklgB0hxYEBhYwQfo1lt65a3C0z24_aI0QtcWJQtF4QGhclH37T4msaxjAFFiax_9eFnYHRGgQBKrQnFxvfoDTiahgw9Y5OcgcphWR0zn5upbrbAA4pc9mFD3OQnCUHrm-cEFELUQS4N4s7ckkKeEsU1z8_JEtRSKZhyBdK-8juGfjHyhSNDQyGdvSqLmTYFYucjduBPgF26VoE7woR8rXaNxtbViDdxYjLy7sDg0j6sxDgPaHuo8-7iQUERXamGoC7KaAeE5r3rK_Fh-tW2aKlagbBZQKSKYwijHqDm0qrFUZ_PSDmDqgvM7BfrSzCRSuQ4WaePYPiyOCYAbuuYVI0rTnjCwQgnYTgFMBuyfiAAjgyAZD1A583QTxHfbVSfiRgAzecON18TKTPgkjHhvBwS2ilxQ4eIvoVEDzF34I1aaq0oMBj4PS7HYFTQCr2UBxSHhDo2HOwntG5p63S5VZdWchwtZ-PDTe0g9bvh8lB6iHh9v2wI52Z7m9gFeomnsoxL1OFp1QvaUISO7gzAxDqXiuC8qz-rXNosPc7uoBu7S8Bh61q2I7EBHkjtbvI4MeFQjHg-WR82VMcV9ulWfGgCvf8kqq7VejsXjvfSv721Uh9mYMfYhqn1gg59i7PhGvvyDiTxD6rg_aODXKRA3Rz-0vDnD8c1BauX-zkHHCAPhxIDmAAPXKP4tzAwsaBxBb9z_29g4QFzEYdgfwPj4Mkc6fS2QeRBUHOAHBw2podl25eLT8h7LkoeXVqHtXWgCXdoczB6Hs9pzsI5RgLXunDFcwO075V5zBIFAtfKeAKX8Xq4DeLZSIBClIzuVA28qXnZwmbOEQwONNJzeWfUz5yNWcNQYkOf8lRwc1TRrEH2ef8wBrpKERMsKJppn0CDSJ2mFQdnP7--OGYFc7DXd0coWJjIN8_s1HK1U_zwFxLgcUPPdoYSsKWgRsCYAHn5q5NnCu-Y0MHaMzGF9WGQgouYAaLpvjspy3W0sXhzHfnAhOm8r5tA_ZLR0zpf7ER72jsez3cfAUvfQVUUW_sU5fdA6GZ_TF9Q0pfWbhXsAPF_OhzkYA0Emq-IGtauAlXmks16fvYePhJQZXMQOVzTdIKcbU7h80lxHyhG4vde7zroAg3KKVFQbKdsKfq9x5Z2g-4U0NHs6_5aiUQpVZ5-Grjs6Ok7_ma1wWzKrNq7XjnXPhrJHHrPnXTziVw1GGDzq195tVoqmxaUMc-u2z53Ma7edoEB0bQMqEkVYjLsYgSUZwG8Ewv5lA3nuTfkkLgAYMyargKhj809RIEyuideIDW602EqVoFvZt6k3YDhHqtY9TcRkBu37ddridI5EO9O7-HO3-xMdyK9mhs4-3tgOt9i-HfHZ3MvLsV1zSzaTudiidPl2L3nfpEoRgeRNlW9SZLvKXXBuAAO8yAXvhoi7jdx_jTTLrzaaL4Vo642cuuc99WeIA87V3SS1liliMDM1RuwzsEJwOeIE8vv2hhWEauWOwF3HdBigjAE-5uGKLmlNsNnLB3xMfdoFtzReLSzpZgDqW00dO_oOpESDXudMwHzN0E_VBwA9Q4QM5o9LZxppwWFgMxBJYkvxgO4DHoiGjG4__nOP4l7j6Cn7xSulXt1tAoq7WvzT35Y88ZCjbQIrW30insNQtzWtOsiAcn5TwhmVf7L0YQNsjF0BI8GfhQaCEKcDfIxXAsbBASz8Z4nL1OXgFrrIHQemdp2Oe9roftxQj5TLzOwq9ZVwbhX-q7g69stau89UyOiew16dn549VGqsrmlO-k8L9WxeA1JLoN3Alb62qM3ffRzwQH_zpe3PtrmHp57b53BIXZOFGFG5QcvBzaznqosKwecc9zarfc2hV-hcmulPL6e1m0QTcr5kNBdkkx15y93NjzbkiWgaymZng_0koSdOFdgABXHLwVnGE-8T0Tf8gb6ab66lm-7RE9i3ozMt5cuO55v9l11Et-AkreH1dcniEotfVQbcZMGxyoxCfkn3v1L3tol1RCkKJP5mowBX_IUR_ezgXVaBWzQgXotMqIPwWmD66qoKiMX379bD5VqmSuq9tBRLgs1GvfMqhCjHxQtR_fqXadtUhfRE1E0KFE9CzUYwoUQsLAaW1dgO94bzVycJSwQH4Fkh_gLhazfRH-grslX4ifSwFrzbVdqUK-f84n2ksEp_Mmkx75katAh-o7BvzXJrMfaBku7wsN8lyuopfnl10KxSGxupoC6ofRy8LmRpTN7KqeJSqOA1Wd2KbiKhR5NcxUYlTohYzOqkkCTXL-2ALsLvfVaEPGMObl2kGPSiHMbJKzmyVnK-d10OrrXtYR0-Udnbe084toiCU9GLsYQdDUzYWTSfai2zbb1AFx2mc7JexuzZy0PIaLPzOq_kWB2gTaRP22kl57p2gSpRmWImrBVd1EFQMPFb5D8UZroEYWmWgU8RbeuEKeONiuHb_ZBVZQl4MkddWDOXQJJr3zZNZAkd9DL-aQf5KGH_SyXHdAG7UQ_wEQ4-C2lecEREehj_0AE_oMregjBv2iIfA2QlpiuLmQgiWmPgVCN0Q1Q7_WqAQjp6f87BxnZ2eHr76wA6AB3yzOtPu76XUj6s-qy-_1M4T3e76vjKMQhvt1Sh-6fi1SSiKVmH7W-dCG1QvGKiDT72gbvjAEzAZzlCLm-YfhGAR-B0ImKx0t3vT7NylcA97uCSvlMDwa9dLr5Vi-viTIyQdATohySBru0Is2pCG-66oTUF-S8MkzocJNobRJkBywdAUERtEeaEvA1qYuh_QUCdAdQE3eMctAghSCvo97MBYSNr6Iau8NmacBYKGjQ4S9Iskhzi3EhgpLiNrBQIhSGgdRC3eLProFMBJCKwE6-xgXr6oa11PF6Ty2VtPIO-4GnPJcBUwCz68B2ysm4j-1YOoizg2BGMBNoLPnYEWABQsF5w4dBiV7BuQfDEHWGYpOVCuAIwEsDy4A_FKRB8MfuPIJebdncCZBJfKG4hqoXgUFjAzZDjxNBSytF6oCTQYUIJAEYCkANsf_l17lShQFQFgoqgQEH0cLPk4EAg7ZNAhs-sCs6BuBwooxCeBRgRhAmBvgbT6ngDrDACaeWdv4HeqQQSvJ5WCdKLjr0TNCzSg-HPpEERS0QZv4H8YpLABYmC-Nki-0qUCCxDgMwJCx9EBUH2aHIfRM8EFgKkL8F4UIgOuJfBJSD8F6QUpOIHqIb7AVBbBIHLsGi4j4HMHQ-pLg57W0KCKAqXBnNIPyJBnnEeADou0hcFQ-HPvIHbs6dtdAEAAIRAQfB4IYQB_BJSDSGQ2oIZED0h7RLh4kh7PpzQ2qHqrUGc8objkF3BygjJDsIB7DEQgcxQVbJBBCQT6qSulQeMHVB6uOl5ZBmXtEFqOshgexmOb7KCpwqcISpAIhFIUiEBq7QKiEc-ebDkEsOz5OGpYhMCmD4qBZohQJmhnNFMG3eXPjoFwBP5k95waRVGwHeBHARsEpU-wVPJqhhoSKzGhg4LlYhBpwWEEwQktGgpfeKkGs5lU5bgIGxBRZFEBYACUElA_BeSJDZWkeANmEO0ABkmBI46UCEBCEV9NMQbK1TOxBUuIXrl7W0cTknY3yF6PLjhOYQpqjwAVTBISJGVzLQxIMiRlsyaq5zCx5UUpzDsyDhLMKECsAk6GOHVYZAnejzhmvHujy46sigRsuMQHPAW8FeCjIYh1TiLA_WOoNqZw4Sgu2H4CNNj2E1MC4SBxXhszGhgUg2wXeF7oQOG2HgI64eWiHhD5MeG1IZjruHPC6YdbSzGk3NYGecN6Igpyw7oThIRgmYUWGtKidksbYwOooWHTEIxpWHwA0xK344S-1nSqHWohLIYuuathta5B8vCSrfWD5Ff5fhWXCeFPWEgcBHbioAUZSKhcYUrRw-OEq6FaBkgPbSLBCAT6GGB_cOwEoao9GGFosEYYFjBhgQdS5RhiVgVZjUHMjJCo-SYXwG3BaYfcEe8TvHiEIa-BPbS9Bo4NsFiRj4FQrRBVXJFBO8vIdS5JhKoXUGBYQoapEihYpEGwShFIVKHyUkYXiFyhmVoqHWcLrqqH1BTdhqEp4cIYBTWRvBCBwnSQfKFEUhA9omxahwUQKFywGbMlpeedwGrAHsyhvyp6hYUQaF6RiITKDC47QEZGWhyXs44WAUIqZFsQDoXM7MR7tLYLXezgZxHm0PEbBqXQKwQJH-hQkbGEn2SkVEGphCyIBGih4wBDRE8ebI1ANulvGIGykGcuVKgRAuubTkhZVKNFuElUZdAUC5tBxEzBkgAT4kKZkZ6GK-Hgb6FeBawT4HCROUUaF5RwbhJGJebkUcHRhcCKPRqGzhpmDSR-VshpnBRtLj5E-1wSmFN2woW-SHEQIaji9EEIQDFQh9YZlK2s-oXaz6R50SaFbRwvk7x5sDQf1EAOs4jgRSBDeDIHO0H0U7zzRaLGAQvBDxCUhVcvXOZFtKBEWAIee2QclFBCfUXkFCBzCM4CWwzfPHS3a2zEtCBs4oYNHOR2eK5GCI7kZNGAwl0UqH8hWdkjGjsT_rAAyabMdQC6hJKizFSxI4arA2SJQU4Zc6EsazGKx3smvZuGgvAzFMxsscIK8Eesdczi2K-CrE9Mj0eezGxNalYKheGbBbw6hqAgKqQxIkY6wwxNQQVFE-FodTEDBYauVKm2IwR7SrR2MRVG1RMdJoEbRNCk1HehLUQdGrBZEOsGj0QsVnauxOwe7F8xN0TJGhBZgRDik-3UTcG9R_XLCFZRUMblHOsyIe0D0K6IcjGkInYYLSBYM4YFiqA9cUsBNBgyIFAqQTaISF4AOAFHH70OUHPiPweoPtI40lgCKANAOUMFhE0nCnwrQhk0YIHdxmkV3E-0vcT7S4xxnr_yJ2m0v1SzhgbBgAtxxwJ-jtxS0Y7jdxpMRkFWR8UVl4_RdkWpFihdEE5H3sPMaUH8xSXoLHmcVQd5EUxGXn5HcUAUfbE7EjseE7OxJcanEGRlcT7TexZXrsq-qJURIHdxy0UxEsMovoHRhxUvrd6MK0cfoGtRlYh1EII6dIpZdy2Ghr5R-SlvgmbBp0eGHpxIxh_FeRhwbQgJWL0TGE5x1tJT75x30d552RxcRSHwhlCaJHpxj4CwrVxd8X2AZ6fMUpTzxNcWPZLxBISvGMK68SIJiJkIqHTnxOiJfGle4fLfG2s98WkCPxeMc_EyhIbpOK0mpCRGAhatgLcK9-1MUbBKJaFJT4p6dgJcLDg-FK2x5sDftMaMATaFzpiATmh7C0JBwWl4-R1kdXF2xWoQ7EgcBsZxyRRIrLwk9eZ0eXEmhQiUYm-xI2n4ih0iCawzMRjCtQG2muAMaIFC7JrYKtyegQiggAtAD6BZAApkKYOKRFseID4_AM-byATSUAA",mdxType:"Playground"},Object(E.b)(h.a,{width:300,height:300,options:{backgroundColor:15659509},mdxType:"Stage"},Object(E.b)(e.h,{image:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/coin.png",scale:{x:.5,y:.5},anchor:.5,x:150,y:150,mdxType:"Sprite"}))),Object(E.b)("h2",{id:"example"},"Example"),Object(E.b)("iframe",{height:500,scrolling:"no",title:"Sprite",src:"//codepen.io/inlet/embed/f68c95780536e31af9678bab19fdd4b5/?height=300&theme-id=33987&default-tab=result&embed-version=2",frameBorder:"no",allowFullScreen:!0,style:{width:"100%"}}))}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Sprite.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=src-components-sprite.e87f7a492c5a81c98a6b.js.map