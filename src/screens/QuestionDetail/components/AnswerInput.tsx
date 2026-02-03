import React from 'react';
import { Button, Text, TextInputArea, View } from '@components';

interface AnswerInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onPost: () => void;
  isPosting?: boolean;
}

const AnswerInput: React.FC<AnswerInputProps> = ({
  value,
  onChangeText,
  onPost,
  isPosting = false,
}) => {
  return (
    <View marginTop={24} gap={16}>
      <Text type="subtitle1SemiBold" color="NEUTRAL_90">
        Your Answer
      </Text>
      <TextInputArea
        placeholder="Write your answer here..."
        value={value}
        onChangeText={onChangeText}
        multiline
        numberOfLines={6}
        textAlignVertical="top"
      />
      <Button
        label="Post Your Answer"
        onPress={onPost}
        isLoading={isPosting}
        disabled={isPosting}
      />
    </View>
  );
};

export default AnswerInput;
