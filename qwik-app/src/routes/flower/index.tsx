import { component$, useClientEffect$, useStore, useStylesScoped$, mutable } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import styles from './flower.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const state = useStore({
    count: 0,
    number: 20,
  });

  return (
    <>
      <span>{ state.count }</span>
      <MyButton state={ mutable(state) } />
    </>
  );
});


export const MyButton = component$(({state}) => {

  return (
    <>
      <button onClick$={() => state.count++}>Increment please</button>      
    </>
  );

});