<template>
  <div>
    <h4 class="mb-3">Billing address</h4>
    <b-form @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-md-6 mb-3">
          <b-form-group
            id="firstName-group"
            label="First name"
            label-for="firstName"
          >
            <b-form-input
              name="firstName"
              id="firstName"
              v-model="$v.order.firstName.$model"
              :state="validateState('firstName')"
              aria-describedby="firstName-live-feedback"
            />
            <b-form-invalid-feedback id="firstName-live-feedback"
              >Valid first name is required.</b-form-invalid-feedback
            >
          </b-form-group>
        </div>

        <div class="col-md-6 mb-3">
          <b-form-group
            id="lastName-group"
            label="Last name"
            label-for="lastName"
          >
            <b-form-input
              name="lastName"
              id="lastName"
              v-model="$v.order.lastName.$model"
              :state="validateState('lastName')"
              aria-describedby="lastName-live-feedback"
            />
            <b-form-invalid-feedback id="lastName-live-feedback"
              >Valid last name is required.</b-form-invalid-feedback
            >
          </b-form-group>
        </div>
      </div>

      <div class="mb-3">
        <b-form-group id="email-group" label="Email" label-for="email">
          <b-form-input
            name="email"
            id="email"
            type="email"
            placeholder="yourmail@example.com"
            v-model="$v.order.email.$model"
            :state="validateState('email')"
            aria-describedby="email-live-feedback"
          />
          <b-form-invalid-feedback id="email-live-feedback">
            Please enter a valid email address for shipping
            updates.</b-form-invalid-feedback
          >
        </b-form-group>
      </div>

      <div class="mb-3">
        <b-form-group id="address-group" label="Address" label-for="address">
          <b-form-input
            name="address"
            id="address"
            v-model="$v.order.address.$model"
            :state="validateState('address')"
            aria-describedby="address-live-feedback"
          />
          <b-form-invalid-feedback id="address-live-feedback">
            Please enter your shipping address.
          </b-form-invalid-feedback>
        </b-form-group>
      </div>

      <div class="mb-3">
        <b-form-group
          id="address2-group"
          label="Address 2 (Optional)"
          label-for="address2"
        >
          <b-form-input
            name="address2"
            id="address2"
            placeholder="Apartment or suite"
            v-model="order.address2"
          />
        </b-form-group>
      </div>

      <div class="row">
        <div class="col-md-5 mb-3">
          <b-form-group id="country-group" label="Country" label-for="country">
            <b-form-select
              id="country"
              name="country"
              v-model="$v.order.country.$model"
              :options="countries"
              :state="validateState('country')"
              aria-describedby="country-live-feedback"
            ></b-form-select>
            <b-form-invalid-feedback id="country-live-feedback"
              >Please select a valid country.</b-form-invalid-feedback
            >
          </b-form-group>
        </div>

        <div class="col-md-4 mb-3">
          <b-form-group id="state-group" label="State" label-for="state">
            <b-form-select
              id="state"
              name="state"
              v-model="$v.order.state.$model"
              :options="states"
              :state="validateState('state')"
              aria-describedby="state-live-feedback"
            ></b-form-select>
            <b-form-invalid-feedback id="state-live-feedback"
              >Please provide a valid state.</b-form-invalid-feedback
            >
          </b-form-group>
        </div>
        <div class="col-md-3 mb-3">
          <b-form-group
            id="postcode-group"
            label="Postcode"
            label-for="postcode"
          >
            <b-form-input
              name="postcode"
              id="postcode"
              v-model="$v.order.postcode.$model"
              :state="validateState('postcode')"
              aria-describedby="postcode-live-feedback"
            />
            <b-form-invalid-feedback id="postcode-live-feedback">
              Valid postcode is required.
            </b-form-invalid-feedback>
          </b-form-group>
        </div>
      </div>

      <hr class="mb-4" />
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="same-address" />
        <label class="custom-control-label" for="same-address"
          >Shipping address is the same as my billing address</label
        >
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="save-info" />
        <label class="custom-control-label" for="save-info"
          >Save this information for next time</label
        >
      </div>

      <hr class="mb-4" />
      <h4 class="mb-3">Payment</h4>

      <div class="row">
        <div class="col-md-6 mb-3">
          <b-form-group
            id="ccName-group"
            label="Name on card"
            label-for="ccName"
          >
            <b-form-input
              name="ccName"
              id="ccName"
              v-model="$v.payment.ccName.$model"
              :state="validatePayment('ccName')"
              aria-describedby="ccName-live-feedback"
            />
            <b-form-invalid-feedback id="ccName-live-feedback">
              Name on card is required.
            </b-form-invalid-feedback>
          </b-form-group>
        </div>
        <div class="col-md-6 mb-3">
          <b-form-group
            id="ccNumber-group"
            label="Credit card number"
            label-for="ccNumber"
          >
            <b-form-input
              name="ccNumber"
              id="ccNumber"
              v-model="$v.payment.ccNumber.$model"
              :state="validatePayment('ccNumber')"
              aria-describedby="ccNumber-live-feedback"
            />
            <b-form-invalid-feedback id="ccNumber-live-feedback">
              Valid credit card number is required.
            </b-form-invalid-feedback>
          </b-form-group>
        </div>
      </div>

      <div class="row">
        <div class="col-md-3 mb-3">
          <b-form-group
            id="ccExp-group"
            label="Expiration date"
            label-for="ccExp"
          >
            <b-form-input
              name="ccExp"
              id="ccExp"
              placeholder="(MMYY)"
              v-model="$v.payment.ccExp.$model"
              :state="validatePayment('ccExp')"
              aria-describedby="ccExp-live-feedback"
            />
            <b-form-invalid-feedback id="ccExp-live-feedback">
              Expiration date required
            </b-form-invalid-feedback>
          </b-form-group>
        </div>
        <div class="col-md-3 mb-3">
          <b-form-group id="ccCVV-group" label="CVV" label-for="ccCVV">
            <b-form-input
              name="ccCVV"
              id="ccCVV"
              v-model="$v.payment.ccCVV.$model"
              :state="validatePayment('ccCVV')"
              aria-describedby="ccCVV-live-feedback"
            />
            <b-form-invalid-feedback id="ccCVV-live-feedback">
              Valid security code is required.
            </b-form-invalid-feedback>
          </b-form-group>
        </div>
      </div>
      <hr class="mb-4" />
      <button
        class="btn btn-primary btn-lg btn-block"
        type="submit"
        :disabled="$v.$anyError"
      >
        Continue to checkout
      </button>
    </b-form>
  </div>
</template>

<script>
import {
  required,
  email,
  numeric,
  maxLength,
  minLength
} from 'vuelidate/lib/validators'
import 'bootstrap'

export default {
  data() {
    return {
      order: this.createFreshOrderObject(),
      countries: [
        { value: null, text: 'Choose...' },
        { value: 'Autralia', text: 'Autralia' }
      ],
      states: [
        { value: null, text: 'Choose...' },
        { value: 'Victoria', text: 'VIC' },
        { value: 'Queensland', text: 'QLD' },
        { value: 'New South Wales', text: 'NSW' },
        { value: 'Australian Capital Territory', text: 'ACT' },
        { value: 'Tasmania', text: 'TAS' },
        { value: 'South Australia', text: 'SA' },
        { value: 'Northern Territory', text: 'NT' },
        { value: 'Western Australia', text: ' WA' }
      ],
      payment: {
        ccName: null,
        ccNumber: null,
        ccCVV: null,
        ccExp: null
      }
    }
  },
  validations: {
    order: {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      address: { required },
      country: { required },
      state: { required },
      postcode: { required, numeric }
    },
    payment: {
      ccName: { required },
      ccNumber: {
        required,
        numeric,
        maxLength: maxLength(16),
        minLength: minLength(16)
      },
      ccCVV: { required, maxLength: maxLength(3), minLength: minLength(3) },
      ccExp: {
        required,
        numeric,
        maxLength: maxLength(4),
        minLength: minLength(4)
      }
    }
  },
  methods: {
    createFreshOrderObject() {
      const id = Math.floor(Math.random() * 10000000)
      return {
        id: id,
        firstName: null,
        lastName: null,
        email: null,
        address: null,
        address2: null,
        country: null,
        state: null,
        postcode: null
      }
    },

    validateState(input) {
      const { $dirty, $error } = this.$v.order[input]
      return $dirty ? !$error : null
    },
    validatePayment(input) {
      const { $dirty, $error } = this.$v.payment[input]
      return $dirty ? !$error : null
    },

    onSubmit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('order/createOrder', this.order).then(() => {
          this.$router.push({
            name: 'Phones'
          })

          this.order = this.createFreshOrderObject()
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
