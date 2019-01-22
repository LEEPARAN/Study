## lessipe Vue.js 기초 다지기

### 01. Data binding과 Vue devtools

v-model 이라는 것을 활용하여 input에 입력된 값을 가져오는 예제를 만들어보았다.

```
<body>
<div id='#app'>
  <input type='text' id='user_id' v-model='userId'>
  <input type='password' id='user_password' v-model='userPassword'>
  <button type='button'>로그인</button>
  <br>
  아이디 : {{ userId }}
  <br>
  비밀번호 : {{ userPassword }}
</div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
new Vue({
  el: '#app',
  data() {
    return {
      userId: '',
      userPassword: ''
    }
  }
});
</script>
```
### 수업 핵심내용
#### 1. Vue를 시작하기 위해서는 new Vue라는 함수 실행이 필요
#### 2. vue 인스턴스 데이터는 data 메소드 안에
#### 3. input, textarea 태그 양방향 데이터 바인딩시 v-model
#### 4. 변수에 담긴 값을 html에 출력하고자 하는 경우 {{ 변수명 }}

### 02. List 출력하기

여러개의 리스트를 반복해서 생성하고 싶은 경우에는 보통 for문을 활용한다. 이 for문을 vue.js를 활용해서 진행하려한다.

```
<body>
<div id="app">
    <ul>
        <template v-for="item in items">
            <li>
                <img :src="item.image" alt="">
            </li>
            <li>
                {{ item.title }}
            </li>
        </template>
    </ul>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    let app = new Vue({
        el: '#app',
        data() {
            return {
                items: [
                    {
                        id: 1,
                        image: "https://picsum.photos/201/118/?image=1",
                        title: "컴퓨터"
                    },
                    {
                        id: 2,
                        image: "https://picsum.photos/201/118/?image=100",
                        title: "해변"
                    },
                    {
                        id: 3,
                        image: "https://picsum.photos/201/118/?image=160",
                        title: "휴대폰"
                    },
                    {
                        id: 4,
                        image: "https://picsum.photos/201/118/?image=200",
                        title: "황소"
                    },
                ]
            }
        }
    });
</script>
```

### 수업 핵심내용
#### 1. for in문 사용하듯이 Vue.js에서 제공하는 v-for를 활용하면 v-for 속성의 자식 태그가 길이에 맞게 반복 생성
#### 2. v-bind 속성을 속성명 앞에 작성하여(v-bind:src와 같은 형식) 활용하면 속성 값을 스크립트로 인식해 변수로 읽게함
####    v-bind를 약어로 :(콜론)만 작성하여 활용가능 예) :src="경로"
#### 3. template를 활용하면 한번에 태그들을 관리가 가능하며 template 태그는 html 로드될 때 표시되지 않음.
#### 4. v-for에서 불러온 값들 객체 속성은 임의로 지정해준 이름.객체Key 를 작성해주면 된다.

### 03. Attribute binding

속성 바인딩을 Vue.js 기능을 활용하여 진행하였다.

```
<div id="app">
    <!-- <img :id="`thumbnail_${id}`" :src="image" alt=""> -->
    <div :class="[dropdown, toggle]" :style="[style, fontStyle]">
        <ul>
            <li><a href="#">메뉴1</a></li>
            <li><a href="#">메뉴2</a></li>
        </ul>
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    let app = new Vue({
        el: '#app',
        data() {
            return {
                id: 1,
                image: 'https://picsum.photos/201/118/?image=353',
                style: {
                    background: 'red'
                },
                fontStyle: {
                    fontSize: '10px',
                    fontFamily: 'dotum'
                },
                dropdown: 'dropdown',
                toggle: {
                    on: false
                }
            }
        }
    });
</script>
```

### 수업 핵심내용
#### 1. 클래스명 + js의 data명을 바인딩하고 싶은 경우 ES6의 템플릿 문자열 백틱(`)을 활용하면 가능하다.
#### 2. 스타일, 속성명도 바인딩이 가능하며 여러 개를 부여하고자 하는 경우 태그 속성 값에 배열로 넣으면 된다.
#### 3. 클래스의 경우 값을 객체로 생성하여 { 클래스명: on || off } 할 경우 해당 클래스의 생성 여부를 조정할 수 있다.

### 04.메소드선언 및 Event Handling

버튼 클릭시 보였다 안보였다 하는 리스트를 만들었다.

```
<body>
<div id="app">
    <!-- @click = v-on:click -->
    <!-- <button type="button" @click="add">더하기</button>
    {{ counter }}
    <input type="text" @keyup.enter="keyUp"> -->
    <button type="button" @click="btnClick">버튼</button>
    <div :class="[dropdown, toggle]">
        <ul>
            <li><a href="#">메뉴1</a></li>
            <li><a href="#">메뉴2</a></li>
        </ul>
    </div>
</div>
<style>
    .dropdown ul {
        display:none;
        list-style:none;
        width:200px;
        margin:0;
        border:1px solid #000;
        padding:10px;
    }
    .dropdown.on ul {
        display:block;
    }
</style>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    // let app = new Vue({
    //     el: '#app',
    //     data() {
    //         return {
    //             counter: 0
    //         };
    //     },
    //     methods: {
    //         add() {
    //             this.counter++;
    //         },
    //         keyUp(ev) {
    //             console.log("엔터가 눌림");
    //         }
    //     }
    // });
    let app = new Vue({
        el: '#app',
        data() {
            return {
                id: 1,
                image: 'https://picsum.photos/201/118/?image=353',
                style: {
                    background: 'red'
                },
                fontStyle: {
                    fontSize: '10px',
                    fontFamily: 'dotum'
                },
                dropdown: 'dropdown',
                toggle: {
                    on: true
                }
            }
        },
        methods: {
            btnClick() {
                console.log('!')
                this.toggle.on = !this.toggle.on;
            }
        }
    });
</script>
```

### 수업 핵심내용
#### 1. Vue.js 에서는 사용할 함수들을 methods라는 객체에 담아두고 사용한다.
#### 2. methods 안에 담긴 함수는 화살표 함수를 사용해서는 안된다. 화살표 함수는 this 바인딩을 하지 않기에 data 메소드에 접근이 불가능하다.
#### 3. v-on 속성을 활용하면 이벤트를 핸들링할 수 있다. 약어로 @로 줄일 수 있다.

### 05. Component

컴포넌트가 무엇인지에 대해 알아보았다. 강의에서 보여준 코드가 너무 길어서 내가 임의로 틀만 따라할 수 있도록 작성하였다.

```
<body>
<div id="app">
    <product 
        images='https://picsum.photos/201/118/?image=351'
        title='김박사' 
        description='이 제품은 1번입니다.'
        avatar='https://picsum.photos/201/118/?image=351'>
    </product>
    <product 
        images='https://picsum.photos/201/118/?image=352'
        title='이박사' 
        description='이 제품은 2번입니다.'
        avatar='https://picsum.photos/201/118/?image=352'>
    </product>
    <product 
        images='https://picsum.photos/201/118/?image=353'
        title='박박사' 
        description='이 제품은 3번입니다.'
        avatar='https://picsum.photos/201/118/?image=353'>
    </product>
    <product 
        images='https://picsum.photos/201/118/?image=354'
        title='최박사' 
        description='이 제품은 4번입니다.'
        avatar='https://picsum.photos/201/118/?image=354'>
    </product>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
Vue.component('product', {
    props: ['images', 'title', 'description', 'avatar'],
    template: `
    <div class='layout'>
        <h3> {{ title }} </h3>
        <img :src='avatar' alt=''>
        <div class='images_info'>
            <img :src='images' alt=''>
            <p> {{ description }} </p>
        </div> 
    </div>
    `
})
let app = new Vue({
    el: '#app'
})
</script>
```

### 수업 핵심내용
#### 1. Component를 활용하면 긴 구조의 태그를 모듈화하고 커스텀하여 사용하기 쉽다.
#### 2. Vue.component('태그명, {}) 과 같은 방식으로 첫 번째 인자에는 태그명, 두 번째 인자에 설정 값을 객체로 넣어준다.
#### 3. Props를 활용하여 데이터를 전달할 수 있으며 지정된 변수 명에 값이 담긴다.
#### 4. template 메서드에는 템플릿 문자열을 사용하여 태그를 담고 변수를 담으면 해당 태그에 값을 부여하여 뿌려준다.
