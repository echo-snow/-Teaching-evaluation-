import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import home from '@/components/student/home'
import mark_view from '@/components/Teacher/mark_view'
import evaluation_view from '@/components/Teacher/evaluation_view'
import detail_view from '@/components/Teacher/detail_view'
import new_home from '@/components/Teacher/new_home'
import information_view from "../components/Teacher/information_view"
import information_update from "../components/Teacher/information_update"
import questionnaire from "../components/student/questionnaire"
import teacher_evaluation from "../components/Teacher/teacher_evaluation"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name:'home',
      component:home
    },
    {
      path: '/mark_view',
      name:'mark_view',
      component:mark_view
    },
    {
      path: '/evaluation_view',
      name:'evaluation_view',
      component:evaluation_view
    },
    {
      path: '/detail_view',
      name:'detail_view',
      component:detail_view
    },
    {
      path: '/new_home',
      name:'new_home',
      component:new_home
    },
    {
      path: '/information_view',
      name:'information_view',
      component:information_view
    },
    {
      path: '/information_update',
      name:'information_update',
      component:information_update
    },
    {
      path: '/questionnaire',
      name:'questionnaire',
      component:questionnaire
    },
    {
      path:'/teacher_evaluation',
      name:'teacher_evaluation',
      component:teacher_evaluation
    }
  ]
})
