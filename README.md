<h1>Markdown编辑器</h1>

<a>中文</a> |
<a href="./README.en.md">English</a>

简介：基于vue.js的markdown编辑器，有以下特点：
- 实时预览
- 可定制化
- xss过滤

## 使用方法

### Attributes
| 参数名 | 说明 | 类型 | 可选值 | 默认值
| :----: | :----: | :----: | :----: | :----:|
| options | markdown编辑器的配置参数，参考<a href="https://www.tun6.com/manual/codemirror/config/">options</a> | Object | --- | --- |
| title | 编辑器标题 | String | --- | 'markdown editor' |
| layout | 编辑器功能区,多个值用英文逗号隔开 | String | 'pre,back,clean' | 'pre,back,clean' |

### Events

| 事件名 | 说明 | 回调参数 |
| :----: | :----: | :----: |
| change | 编辑器内容改变 | markdown转换的html字符串 |
| back | 回退 | --- |
| pre | 撤销 | --- |
| clean | 清空编辑器内容 | --- |

