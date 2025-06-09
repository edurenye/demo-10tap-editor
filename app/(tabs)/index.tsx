import { Stack } from 'expo-router';
import { RichText, Toolbar, useEditorBridge } from '@10play/tentap-editor';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const initialContent = `<p>This is a basic example of <b>@10play/tentap-editor</b>!</p>
<p></p>
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<p></p>
<p>This is an example of a list:</p>
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
<p></p>
<p>And a checklist:</p>
<ul data-type="taskList">
    <li data-type="taskItem" data-checked="true">Done</li>
    <li data-type="taskItem" data-checked="false">In progress</li>
    <li data-type="taskItem" data-checked="false">Todo</li>
</ul>`;

export default function Home() {
  const editor = useEditorBridge({
    autofocus: true,
    avoidIosKeyboard: true,
    initialContent,
  });

  return (
    <>
      <Stack.Screen options={{ title: '10tap Editor' }} />
      <SafeAreaView style={styles.container}>
        <RichText editor={editor} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoidingView}>
          <Toolbar editor={editor} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoidingView: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
});
