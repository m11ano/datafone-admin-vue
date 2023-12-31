<script setup lang="ts">
import { Alert, Button, Card, Form, Input } from 'ant-design-vue';
import classNames from 'classNames';
import { ref, reactive, watch, inject } from 'vue';
import { LockOutlined, UserOutlined } from '@ant-design/icons-vue';
import { RequestError } from '@/shared/lib/errors/RequestError';
import { sessionUserProviderInjectKey } from '@/injectionKeys';

interface ILoginState {
    email: string;
    password: string;
}

defineProps<{
    className?: string;
}>();

const { actionLogin } = inject(sessionUserProviderInjectKey)!;

const isLoading = ref(false);
const errors = ref<string[]>([]);

const formState = reactive<ILoginState>({
    email: 'edkirill@yandex.ru',
    password: '123456',
});

const onFinish = async (data: ILoginState) => {
    if (isLoading.value) {
        return;
    }

    errors.value = [];
    isLoading.value = true;
    try {
        await actionLogin(data);
    } catch (e: unknown) {
        if (e instanceof RequestError) {
            errors.value = e.errors;
        } else {
            console.log(e);
        }
    } finally {
        isLoading.value = false;
    }
};

const onFinishFailed = () => {
    errors.value = [];
};

watch(formState, () => {
    errors.value = [];
});
</script>

<template>
    <div :class="classNames($style.loginPage, className)">
        <Card
            title="Вход в панель управления"
            :bordered="false"
            :class="$style.card"
        >
            <Alert
                v-if="errors.length > 0"
                type="error"
                :showIcon="true"
                :class="$style.error"
            >
                <template #message>
                    <template
                        v-for="err of errors"
                        :key="err"
                    >
                        <div>{{ err }}</div>
                    </template>
                </template>
            </Alert>

            <Form
                :model="formState"
                name="login"
                @finishFailed="onFinishFailed"
                @finish="onFinish"
                :labelCol="{ span: 8 }"
                :wrapperCol="{ span: 16 }"
                size="large"
                autoComplete="off"
            >
                <Form.Item
                    label="E-mail"
                    name="email"
                    :rules="[{ required: true, type: 'email', message: 'Введите e-mail!' }]"
                >
                    <Input
                        v-model:value="formState.email"
                        :disabled="isLoading"
                    >
                        <template #prefix><UserOutlined /></template>
                    </Input>
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    :rules="[{ required: true, message: 'Введите пароль!' }]"
                >
                    <Input.Password
                        v-model:value="formState.password"
                        :disabled="isLoading"
                    >
                        <template #prefix><LockOutlined /></template>
                    </Input.Password>
                </Form.Item>

                <Form.Item
                    :wrapperCol="{ offset: 0, span: 24, sm: { offset: 8, span: 16 } }"
                    :class="$style.submit"
                >
                    <Button
                        type="primary"
                        htmlType="submit"
                        :loading="isLoading"
                    >
                        Войти
                    </Button>
                </Form.Item>

                <Form.Item
                    :wrapperCol="{ offset: 0, span: 24, sm: { offset: 8, span: 16 } }"
                    :class="$style.forgetPass"
                >
                    <RouterLink to="/recover-password">Забыли пароль?</RouterLink>
                </Form.Item>
            </Form>
        </Card>
    </div>
</template>

<style lang="less" module>
@import '~includes.less';

.card {
}

.login {
}

.submit {
}

.error {
    margin-bottom: 20px;
}

.width-size-xs({
    .submit, .forgetPass {
        text-align: center;
    }
});
</style>
