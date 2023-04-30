<template>
  <q-page class="q-ma-md">
    <span class="text-h3">Forms</span>
    <q-separator spaced />

    <div class="row justify-center">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-xs col-sm-12 col-md-6 q-pt-xl"
      >
        <q-input
          filled
          autocomplete
          v-model="userForm.email"
          label="Email"
          lazy-rules
          no-error-icon
          :rules="[
            (val) => (val && val.length > 0) || 'This Field is required',
            isValidEmail,
          ]"
        />

        <q-input
          filled
          autocomplete
          type="password"
          v-model="userForm.password1"
          label="Password"
          no-error-icon
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'This Field is required',
            isPasswordLongEnough,
          ]"
        />
        <q-input
          filled
          autocomplete
          type="password"
          v-model="userForm.password2"
          label="Confirm Password"
          no-error-icon
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'This Field is required',
            isPasswordLongEnough,
            isSamePassword,
          ]"
        />

        <q-checkbox
          v-model="userForm.conditions"
          label="I agree to the terms and conditions"
          :style="
            userForm.errorInConditions && !userForm.conditions && 'color: red'
          "
        />

        <div class="row justify-end">
          <q-btn
            unelevated
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
          <q-btn unelevated label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FormsPage',
  setup() {
    const userForm = ref({
      email: '',
      password1: '',
      password2: '',
      conditions: false,
      errorInConditions: false,
    });
    const $q = useQuasar();
    return {
      userForm,
      onSubmit() {
        userForm.value.errorInConditions = false;
        if (!userForm.value.conditions) {
          $q.notify({
            message: 'You must agree to the terms and conditions',
            icon: 'las la-exclamation-circle',
            color: 'red',
          });
          userForm.value.errorInConditions = true;
          return;
        }
      },
      onReset() {
        userForm.value = {
          email: '',
          password1: '',
          password2: '',
          conditions: false,
          errorInConditions: false,
        };
      },
      isValidEmail(email: string) {
        const emailPattern =
          /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailPattern.test(email) || 'Invalid e-mail.';
      },
      isPasswordLongEnough(val: string) {
        return (
          (val && val.length > 5) ||
          'Password must be at least 6 characters long'
        );
      },
      isSamePassword(val: string) {
        return (
          (val && val === userForm.value.password1) || 'Password must match'
        );
      },
    };
  },
});
</script>
