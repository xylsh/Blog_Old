---
layout: page
title: 好的资料
---
<div class="wiki">
    <h2>软件测试</h2>
    <ul class="hide">
        <li><a href="http://openhome.cc/Gossip/JUnit/">JUnit 學習筆記</a></li>
    </ul>
    <h2>版本控制</h2>
    <ul class="hide">
        <li><a href="http://www.worldhello.net/gotgithub/index.html">GotGitHub</a></li>
    </ul>
    <h2>正则表达式</h2>
    <ul class="hide">
        <li><a href="http://deerchao.net/tutorials/regex/regex.htm">正则表达式30分钟入门教程</a></li>
    </ul>
    <h2>有创意的网站</h2>
    <ul class="hide">
        <li><a href="http://lovejiani.com/">不忘初心，方得始终。</a></li>
    </ul>
</div>
<script type="text/javascript">
    $(document).ready(function(){
        $('#content a').each(function(index,element){
            var href = $(this).attr('href');
            if(href.indexOf('#') == 0){
            }else if ( href.indexOf('/') == 0 || href.toLowerCase().indexOf('beiyuu.com')>-1 ){
                $(this).attr('target','_blank');
            }else{
                $(this).attr('target','_blank');
                $(this).addClass('external');
            }
        });
        $('body').delegate('h2','click',function(e){
            e.preventDefault();
            $(this).next('ul').toggle();
        });
    });
</script>
