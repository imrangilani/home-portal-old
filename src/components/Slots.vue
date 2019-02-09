<template>
<div><br>
        ===== Slot starts ====
    <br>
    {{ slotData }}
    <slot name="firstSlot"></slot>
    <slot></slot>
    <slot name="emptySlot">This slot is empty</slot>
    <br>
        ===== Slot ends ====
</div>
</template>
<script>
export default {
    props:{
        slotData: {
            type:String
        }
    }
}
</script>