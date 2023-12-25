<script setup lang="ts">
import { Spin } from 'ant-design-vue';
import classNames from 'classNames';

defineProps<{
    className?: string;
    position?: 'left' | 'center' | 'right';
}>();
</script>

<template>
    <div :class="classNames($style.loader, className, position && position !== 'left' && [$style.block, $style['block_' + position]])">
        <div :class="$style.spinWrap">
            <Spin
                size="large"
                :class="$style.spin"
            />
            <div :class="$style.tip">Загрузка...</div>
        </div>
    </div>
</template>

<style lang="less" module>
.loader {
    display: inline-block;
}

.block {
    display: block;
}

.spinWrap {
    text-align: center;
}

.block_center {
    .spinWrap {
        margin: 0 auto;
    }
}

.block_right {
    .spinWrap {
        margin-left: auto;
    }
}

.spin {
}

.tip {
    margin-top: 20px;
    font-size: 16px;
}
</style>
