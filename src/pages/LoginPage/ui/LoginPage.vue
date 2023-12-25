<script setup lang="ts">
import classNames from 'classNames';
import { Login } from '@/features/Login';

defineProps<{
    className?: string;
}>();
</script>

<template>
    <div :class="classNames($style.loginPage, className)">
        <!-- <div :class="classnames($style.loginPage, className)"> {query.get('new_password_generated') !== null && (
        <Alert
            message="Новый пароль отправлен на ваш e-mail"
            type="warning"
            showIcon
            className="{cls.alert}"
        />
        )} -->
        <Login />
    </div>
</template>

<style lang="less" module>
.loginPage {
    padding: 0 15px;
    max-width: 460px;
    margin: 0 auto;
}

.alert {
    margin-bottom: 20px;
}
</style>
