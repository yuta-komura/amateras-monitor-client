Vue.component('sample', { //sampleでコンポーネント名を定義
    data() { //data()でdataを定義
        return {
            msg: 'hello ELOOP!'
        }
    },
    template: '<div>{{ msg }}</div>' //templateで内包するHTML要素を定義
})

new Vue({ //Vueインスタンスを作成
    el: '#app'
})