import {defineComponent, onMounted, ref} from 'vue'
import { Chart, Grid, Line, Tooltip,Marker, Bar } from 'vue3-charts'
import {getCDI} from 'pages/charts/charts.service';
import {CDI} from 'pages/charts/charts.interface';
import {useQuasar} from 'quasar';

export default defineComponent({
  name: 'LineChart',
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Chart, Grid, Line, Tooltip,Marker, Bar },
  setup() {
    const $q = useQuasar();

    const data = ref<CDI[]>([]);
    const direction = ref('horizontal')
    const margin = ref({
      left: 0,
      top: 20,
      right: 20,
      bottom: 0
    })

    const axis = ref({
      primary: {
        type: 'band'
      },
      secondary: {
        type: 'linear',
        ticks: 8
      }
    })

    function alert () {
      $q.dialog({
        title: 'Error',
        message: 'Erro ao buscar dados'
      }).onOk(() => {
        // console.log('OK')
      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }

    function getInfosCdi() {
      getCDI().then((res) => {
        data.value = res.length > 12 ? res.slice(-12) : res.length > 0 ? res : [];
      }).catch(() => {
        alert();
      })
    }

    onMounted(() => {
      getInfosCdi();
    })

    return { data, direction, margin, axis }
  }
})
