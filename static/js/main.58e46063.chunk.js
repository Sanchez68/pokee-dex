(this["webpackJsonppokee-dex"]=this["webpackJsonppokee-dex"]||[]).push([[0],{10:function(e,t,r){e.exports={grass:"PokesDesk_grass__2Pj8R",poison:"PokesDesk_poison__1hrBU",fire:"PokesDesk_fire__1Ds-x",normal:"PokesDesk_normal__1r-lv",ground:"PokesDesk_ground__nsRxz",flying:"PokesDesk_flying__3y1mu",bug:"PokesDesk_bug__1Cp3F",electric:"PokesDesk_electric__hDDgQ",water:"PokesDesk_water__RVj3C",fairy:"PokesDesk_fairy__1bD-S",fighting:"PokesDesk_fighting__2SR2s",psychic:"PokesDesk_psychic__2frg6",rock:"PokesDesk_rock__2n7Ne",steel:"PokesDesk_steel__nOHib",ice:"PokesDesk_ice__1BhtL",ghost:"PokesDesk_ghost__1mcZi",dragon:"PokesDesk_dragon__1iNPB",dark:"PokesDesk_dark__2X5Xm",unknown:"PokesDesk_unknown__385Gq",shadow:"PokesDesk_shadow__Y68tR",all:"PokesDesk_all__84sCH",pokemonsContainerWrapper:"PokesDesk_pokemonsContainerWrapper__S-yKo",loadMore:"PokesDesk_loadMore__a-HD_",pokeCardWrapper:"PokesDesk_pokeCardWrapper__21hWU",types:"PokesDesk_types___fygU",type:"PokesDesk_type__1k7UO",pokeDeskWrapper:"PokesDesk_pokeDeskWrapper__1MYyL",butLoadMore:"PokesDesk_butLoadMore__2IEnk",pokemonInfoCard:"PokesDesk_pokemonInfoCard__3xcHJ",antdCardWrapper:"PokesDesk_antdCardWrapper__3Zzf5",pokeInfWrapper:"PokesDesk_pokeInfWrapper__9xIJ4",pokemonNameInfo:"PokesDesk_pokemonNameInfo__3sgxL",cardMetaTitle:"PokesDesk_cardMetaTitle__t3KLD",noPokemons:"PokesDesk_noPokemons__1ZId5"}},120:function(e,t,r){},215:function(e,t,r){"use strict";r.r(t);var n=r(0),s=r.n(n),o=r(19),a=r.n(o),c=(r(120),r(79),r(101)),i=r(102),p=r(114),d=r(113),k=r(42),_=r(10),l=r.n(_),j=r(44),u=r(219),h=r(217),m=r(24),b=r(4),O=function(e){var t=h.a.Meta,r=e.pokemon,n=r.sprites.other.home.front_default;return Object(b.jsx)("div",{className:l.a.pokeCardWrapper,onClick:function(){return e.setChoosedPokemon(r)},children:Object(b.jsx)(m.a,{span:8,className:l.a.ColPoke,children:Object(b.jsx)("div",{children:Object(b.jsxs)(h.a,{hoverable:!0,className:l.a.antdCardWrapper,cover:Object(b.jsx)("img",{alt:r.name+" img",src:n}),children:[Object(b.jsx)(t,{className:l.a.cardMetaTitle,title:r.name.charAt(0).toUpperCase()+r.name.slice(1)}),Object(b.jsx)("div",{className:l.a.types,children:r.types.map((function(e){return Object(b.jsx)("div",{className:l.a.type+" "+l.a[e.type.name],children:e.type.name.charAt(0).toUpperCase()+e.type.name.slice(1)},e.type.name)}))})]})})},r.id)})},P=function(e){var t=e.pokemons.filter((function(t){return"all"===e.currentType||t.types.map((function(e){return e.type.name})).some((function(t){return t===e.currentType}))}));return Object(b.jsxs)("div",{className:l.a.pokeDeskWrapper,children:[Object(b.jsx)("div",{className:l.a.pokeListInfo,children:Object(b.jsxs)(j.a,{className:l.a.rowPokeList,gutter:[32,32],children:[t.length>0?t.map((function(t){return Object(b.jsx)("div",{className:l.a.pokeDeskWrapper,children:Object(b.jsx)(O,{pokemon:t,setChoosedPokemon:e.setChoosedPokemon})},t.id)})):Object(b.jsx)(b.Fragment,{}),Object(b.jsx)("div",{children:t.length<=0?Object(b.jsx)("div",{className:l.a.noPokemons,children:"No Pokemon"}):Object(b.jsx)(b.Fragment,{})})]})}),Object(b.jsx)("div",{className:l.a.butLoadMore,children:Object(b.jsx)(u.a,{type:"primary",size:"large",shape:"round",onClick:function(){e.requestLoadMore(e.next)},children:"Load More"})})]})},x=r(35),f=r.n(x),g=r(66),y=r(67),v=r(21),D=r(75),C=D.create({baseURL:"https://pokeapi.co/api/v2/",headers:{}}),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;return C.get("pokemon/?limit=".concat(e)).then((function(e){return e.data}))},w=function(e){return D.get(e).then((function(e){return e.data}))},H=function(){return C.get("type").then((function(e){return e.data}))},T="SET_POKEMONS",W="SET_NEW_POKEMONS",L="TOGGLE_IS_FETCHING",M="SET_CHOOSED_POKEMON",E="SET_CURRENT_TYPE",S="SET_ALL_TYPES",I={pokemons:[],pageLimit:12,nextPage:"https://pokeapi.co/api/v2/pokemon/?offset=12&limit=12",isFetching:!0,choosedPoke:{},currentType:"all",types:[]},U=function(e){return{type:T,pokemons:e}},F=function(e){return{type:L,isFetching:e}},q=function(e){return function(){var t=Object(g.a)(f.a.mark((function t(r){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all(e.map((function(e){return w(e.url)}))));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},A=function(e,t){var r=e.toString();return r.length===t?r:r.length<t?"0".repeat(t-r.length)+r:"0".repeat(t)},R=function(e){var t=e.choosedPoke,r=new Map;return 0!==Object.keys(e.choosedPoke).length&&t.stats.forEach((function(e){r.set(e.stat.name,e.base_stat)})),0===Object.keys(e.choosedPoke).length?Object(b.jsx)(b.Fragment,{}):Object(b.jsxs)("div",{className:l.a.pokemonInfoCard,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:t.sprites.other.home.front_default,alt:t.name}),Object(b.jsx)("div",{className:l.a.pokemonNameInfo,children:t.name.charAt(0).toUpperCase()+t.name.slice(1)+" #"+A(t.id,3)})]}),Object(b.jsx)("table",{children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Type"}),Object(b.jsx)("td",{children:t.types.map((function(e){return Object(b.jsx)("div",{className:e.type.name,children:e.type.name},e.type.name)}))})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Attack"}),Object(b.jsx)("td",{children:r.get("attack")})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Defense"}),Object(b.jsx)("td",{children:r.get("defense")})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"HP"}),Object(b.jsx)("td",{children:r.get("hp")})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"SP Attack"}),Object(b.jsx)("td",{children:r.get("special-attack")})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"SP Defense"}),Object(b.jsx)("td",{children:r.get("special-defense")})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Speed"}),Object(b.jsx)("td",{children:r.get("speed")})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Weight"}),Object(b.jsx)("td",{children:t.weight})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Total moves"}),Object(b.jsx)("td",{children:t.moves.length})]})]})})]})},K=r.p+"static/media/preloader.f2e33647.gif",X=r(76),B=r.n(X),V=function(e){return Object(b.jsx)("div",{className:B.a.preloaderWrapper,children:Object(b.jsx)("img",{className:B.a.preloader,src:K,alt:"Data loading..."})})},Y=function(e){Object(p.a)(r,e);var t=Object(d.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"componentDidMount",value:function(){this.props.requestPokemons(this.props.pageLimit)}},{key:"render",value:function(){return Object(b.jsx)("div",{className:l.a.PokemonsContainer,children:this.props.isFetching?Object(b.jsx)(V,{}):Object(b.jsxs)("div",{className:l.a.pokemonsContainerWrapper,children:[Object(b.jsx)("div",{className:l.a.pokemonsListBlock,children:Object(b.jsx)(P,{pageLimit:this.props.pageLimit,pokemons:this.props.pokemons,requestLoadMore:this.props.requestLoadMore,next:this.props.next,setChoosedPokemon:this.props.setChoosedPokemon,currentType:this.props.currentType,types:this.props.types})}),Object(b.jsx)("div",{className:l.a.pokeInfWrapper,children:Object(b.jsx)(R,{choosedPoke:this.props.choosedPoke})})]})})}}]),r}(s.a.Component),Z=Object(k.b)((function(e){return{pageLimit:e.pokePage.pageLimit,currentPage:e.pokePage.currentPage,isFetching:e.pokePage.isFetching,pokemons:e.pokePage.pokemons,next:e.pokePage.nextPage,choosedPoke:e.pokePage.choosedPoke,currentType:e.pokePage.currentType,types:e.pokePage.types}}),{setPokemons:U,requestPokemons:function(e){return function(){var t=Object(g.a)(f.a.mark((function t(r){var n,s,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(F(!0)),t.next=3,N(e);case 3:return n=t.sent,t.next=6,r(q(n.results));case 6:return s=t.sent,r(U(s)),t.next=10,H();case 10:o=t.sent,r((a=o.results,{type:S,types:a})),r(F(!1));case 13:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},requestLoadMore:function(e){return function(){var t=Object(g.a)(f.a.mark((function t(r){var n,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e);case 2:return n=t.sent,t.next=5,r(q(n.results));case 5:s=t.sent,r((o=s,a=n.next,{type:W,newPokemons:o,next:a}));case 7:case"end":return t.stop()}var o,a}),t)})));return function(e){return t.apply(this,arguments)}}()},setChoosedPokemon:function(e){return{type:M,chosedPokemon:e}}})(Y),G=r(31),J=r.n(G),z=Object(k.b)((function(e){return{types:e.pokePage.types,currentType:e.pokePage.currentType}}),{setCurrentType:function(e){return{type:E,currentType:e}}})((function(e){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:J.a.headerMain,children:[Object(b.jsx)("div",{className:J.a.dropdownWrapper,children:Object(b.jsxs)("div",{className:J.a.dropdown,children:[Object(b.jsx)(u.a,{type:"primary",shape:"round",className:J.a.dropbtn,children:e.currentType.charAt(0).toUpperCase()+e.currentType.slice(1)}),Object(b.jsxs)("div",{className:J.a.dropdownContent,children:[Object(b.jsx)("div",{className:J.a.all,onClick:function(){return e.setCurrentType("all")},children:"All"}),e.types.map((function(t){return Object(b.jsx)("div",{onClick:function(){return e.setCurrentType(t.name)},className:J.a[t.name],children:t.name.charAt(0).toUpperCase()+t.name.slice(1)},t.name)}))]})]})}),Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:"PokeDex"})})]})})}));r(214);var Q=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"headerWrapper",children:Object(b.jsx)(z,{})}),Object(b.jsx)("div",{className:"bodyWrapper",children:Object(b.jsx)(Z,{})})]})},$=r(48),ee=r(111),te=Object($.b)({pokePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(v.a)(Object(v.a)({},e),{},{pokemons:Object(y.a)(t.pokemons)});case W:return Object(v.a)(Object(v.a)({},e),{},{pokemons:[].concat(Object(y.a)(e.pokemons),Object(y.a)(t.newPokemons)),nextPage:t.next});case L:return Object(v.a)(Object(v.a)({},e),{},{isFetching:t.isFetching});case M:return Object(v.a)(Object(v.a)({},e),{},{choosedPoke:t.chosedPokemon});case E:return Object(v.a)(Object(v.a)({},e),{},{currentType:t.currentType});case S:return Object(v.a)(Object(v.a)({},e),{},{types:t.types});default:return e}}}),re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.c,ne=Object($.d)(te,re(Object($.a)(ee.a))),se=r(112);a.a.render(Object(b.jsx)(se.a,{children:Object(b.jsx)(k.a,{store:ne,children:Object(b.jsx)(Q,{})})}),document.getElementById("root"))},31:function(e,t,r){e.exports={grass:"PokeHeader_grass__rquaV",poison:"PokeHeader_poison__1kllF",fire:"PokeHeader_fire__2Xz2q",normal:"PokeHeader_normal__26QUV",ground:"PokeHeader_ground__r_Wps",flying:"PokeHeader_flying__1qH_8",bug:"PokeHeader_bug__33VJv",electric:"PokeHeader_electric__1kG4S",water:"PokeHeader_water__1tiCX",fairy:"PokeHeader_fairy__rlTZd",fighting:"PokeHeader_fighting__1XAba",psychic:"PokeHeader_psychic__315Pc",rock:"PokeHeader_rock__3yQ0Z",steel:"PokeHeader_steel__1OU8t",ice:"PokeHeader_ice__2-ji3",ghost:"PokeHeader_ghost__389Nx",dragon:"PokeHeader_dragon__1BUoo",dark:"PokeHeader_dark__1dmWV",unknown:"PokeHeader_unknown__1fK3U",shadow:"PokeHeader_shadow__3R2sF",all:"PokeHeader_all__1Pu-q",headerMain:"PokeHeader_headerMain__3H8QT",types:"PokeHeader_types__MLgCd",dropbtn:"PokeHeader_dropbtn__1OKIY",dropdownWrapper:"PokeHeader_dropdownWrapper__KYdmd",dropdown:"PokeHeader_dropdown__1cWw0",dropdownContent:"PokeHeader_dropdownContent__3Rsy3"}},76:function(e,t,r){e.exports={preloaderWrapper:"preloader_preloaderWrapper__2CCe-",preloader:"preloader_preloader__1ZHXI"}},79:function(e,t,r){}},[[215,1,2]]]);
//# sourceMappingURL=main.58e46063.chunk.js.map