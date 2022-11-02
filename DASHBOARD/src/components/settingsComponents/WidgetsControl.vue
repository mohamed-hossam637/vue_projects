<template>
    <div class="WidgetsControl">
        <h3>widgets control</h3>
        <p>show/hide widgets</p>
        <form>
            <ul class="widgets-list">
                <li class="widget">
                    <input type="checkbox" id="welcome" checked>
                    <label for="welcome">welcome</label>
                </li>
                <li class="widget">
                    <input type="checkbox" id="lastTasks" checked>
                    <label for="lastTasks">last tasks</label>
                </li>
                <li class="widget">
                    <input type="checkbox" id="quickDraft" checked>
                    <label for="quickDraft">quick draft</label>
                </li>
                <li class="widget">
                    <input type="checkbox" id="yearlyTargets" checked>
                    <label for="yearlyTargets">yearly targets</label>
                </li>
            </ul>
            <button class="btn-shape save-changes">save</button>
        </form>
    </div>
</template>
<script>
export default {
    name: "WidgetsControl"
}
</script>
<style scoped>
.WidgetsControl{
    background-color: white;
    padding: 15px;
    border-radius: 6px;
}
.WidgetsControl h3 ,
.WidgetsControl p{
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
    text-transform: capitalize;
}
.WidgetsControl p{
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
    font-size: 12px;
    color: var(--gray-color);
}
.widgets-list .widget:not(:last-child){
    margin-bottom: 10px;
}

.widgets-list .widget input{
    margin-right: 10px;
}
.widgets-list .widget label{
    text-transform: capitalize;
    font-size: 14px;
    font-weight: bold;
}
.save-changes{
    display: block;
    border: none;
    outline: none;
    margin: 10px 15px 10px auto;
}
</style>