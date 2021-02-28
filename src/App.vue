<template>
  <div id="app">
    <table>
      <thead>
        <tr>
          <th v-for="item in response.meta.fields" :key="item.id"> {{item.label}} </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="listItem in response.list" :key="listItem.id">
          <template v-for="item in response.meta.fields">
            <td class="w-100" v-if="item.type === 'boolean'" :key="item.id">
              <input type="checkbox" :checked="listItem[item.name]">
            </td>
            <td class="w-100" v-else-if="item.type === 'datetime'" :key="item.id">
              {{transformDate(listItem[item.name])}}
            </td>
            <td class="w-350" v-else :key="item.id">
              {{listItem[item.name]}}
            </td>
          </template>  
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import transformDate from './components/mixins/transformDate'
export default {
  name: 'App',
  data: () => {
    return {
      response: {
        "list" : [ {
          "resume" : "обязательно к ознакомлению",
          "date" : "2021-02-15T18:35:29.247Z",
          "timeStamp" : "2021-02-19T17:04:54.510Z",
          "id" : "10",
          "title" : "Документ \"Должностная инструкция\"",
          "isPublish" : "true",
          "createDate" : "2021-02-15T18:35:48.217Z"
        }, {
          "resume" : "Китайский Новый год или почему поставщики задерживают отгрузки",
          "date" : "2021-02-15T18:21:56.637Z",
          "timeStamp" : "2021-02-19T17:04:58.500Z",
          "id" : "20",
          "title" : "Новость от BBC от 15.02.2021 года \"Chinese New Year is unstoppable festival\" удивительное рядом",
          "isPublish" : "true",
          "createDate" : "2021-02-15T18:26:49.037Z"
        }, {
          "resume" : "Все согласования пройдены!",
          "date" : "2021-02-14T18:06:42.923Z",
          "timeStamp" : "2021-02-19T17:05:06.897Z",
          "id" : "30",
          "title" : "Обновленная документация утверждена",
          "isPublish" : "true",
          "createDate" : "2021-02-14T18:08:02.403Z"
        }, {
          "resume" : "интервал 14:00-16:00",
          "date" : "2021-02-14T17:59:53.553Z",
          "timeStamp" : "2021-02-19T17:05:12.970Z",
          "id" : "50",
          "title" : "Внимание: 15.02.2021 ожидается отключение электроэнергии",
          "isPublish" : "true",
          "createDate" : "2021-02-14T18:00:40.467Z"
        } ],
        "meta" : {
          "fields" : [ {
            "id" : "100",
            "name" : "title",
            "type" : "text",
            "label" : "Заголовок",
            "canSort" : true
          }, {
            "id" : "200",
            "name" : "resume",
            "type" : "text",
            "label" : "Резюме",
            "viewType" : "98",
            "enum" : [ ],
            "canSort" : false
          }, {
            "id" : "300",
            "name" : "date",
            "type" : "datetime",
            "label" : "Дата",
            "canSort" : true
          }, {
            "id" : "400",
            "name" : "isPublish",
            "type" : "boolean",
            "label" : "Публиковать",
            "canSort" : true
          },{
            "id" : "500",
            "name" : "createDate",
            "type" : "datetime",
            "label" : "Дата создания",
            "canSort" : true
          }, {
            "id" : "600",
            "name" : "timeStamp",
            "type" : "datetime",
            "label" : "Дата модификации",
            "canSort" : true
          } ]
        }
      }
    }
  },
  mixins: [ transformDate ]
}
</script>


<style scoped>
  table td {
    text-align: center;
    word-break: break-all;
    padding: 0 10px
  }
  .w-100 {
    max-width: 100px;
    width: 100px
  }
  .w-350 {
    max-width: 350px;
    width: 350px
  }
</style>