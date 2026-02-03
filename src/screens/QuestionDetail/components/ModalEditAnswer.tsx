import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet } from 'react-native';
import { Button, Text, TextInputArea, View } from '@components';

interface ModalEditAnswerProps {
  visible: boolean;
  initialContent: string;
  onClose: () => void;
  onSave: (content: string) => void;
}

const ModalEditAnswer: React.FC<ModalEditAnswerProps> = ({
  visible,
  initialContent,
  onClose,
  onSave,
}) => {
  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);

  const handleSave = () => {
    onSave(content);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text type="subtitle1SemiBold">Edit Answer</Text>
          <TextInputArea
            value={content}
            onChangeText={setContent}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
          <View row gap={12} justifyContent="flex-end">
            <Button
              label="Cancel"
              style={styles.cancelButton}
              height={36}
              width={100}
              onPress={onClose}
            />
            <Button label="Save" height={36} width={100} onPress={handleSave} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    gap: 16,
  },
  cancelButton: {
    backgroundColor: '#ccc',
  },
});

export default ModalEditAnswer;
