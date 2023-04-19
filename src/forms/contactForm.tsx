import React from "react";
import {
  Box,
  FormControl,
  Input,
  Textarea,
  FormLabel,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import UseNodemailer from "../../public/hooks/useNodemailer";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const toast = useToast();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    trigger();
    try {
      UseNodemailer(data);
      toast({
        title: "Message sent!",
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: `Error sending message! Please message me on LinkedIn. ${error} `,
        status: "error",
        isClosable: true,
      });
    }
  };

  const onError = () => {
    console.log("error");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormControl>
        <VStack>
          <FormLabel w="full" px="0.75rem">
            Name
          </FormLabel>
          <Input
            type="text"
            placeholder="name..."
            autoComplete="off"
            {...register("name", {
              required: "Cannot be blank",
            })}
          />

          {errors.name && (
            <Box color="red" _dark={{ color: "neonYellow" }} fontSize="sm">
              <Text mt="-0.5rem">{errors.name.message}</Text>
            </Box>
          )}

          <FormLabel w="full" px="0.75rem">
            Your Email
          </FormLabel>
          <Input
            type="email"
            placeholder="email..."
            autoComplete="off"
            {...register("email", {
              required: "Cannot be blank",
            })}
          />

          {errors.email && (
            <Box color="red" _dark={{ color: "neonYellow" }} fontSize="sm">
              <Text mt="-0.5rem">{errors.email.message}</Text>
            </Box>
          )}

          <FormLabel w="full" px="0.75rem">
            Subject
          </FormLabel>
          <Input
            type="text"
            placeholder="subject..."
            autoComplete="off"
            {...register("subject", {
              required: "Cannot be blank",
            })}
          />

          {errors.subject && (
            <Box color="red" _dark={{ color: "neonYellow" }} fontSize="sm">
              <Text mt="-0.5rem">{errors.subject.message}</Text>
            </Box>
          )}

          <FormLabel w="full" px="0.75rem">
            Message
          </FormLabel>
          <Textarea
            placeholder="enter message here..."
            autoComplete="off"
            {...register("message", {
              required: "Cannot be blank",
            })}
          />

          {errors.message && (
            <Box color="red" _dark={{ color: "neonYellow" }} fontSize="sm">
              <Text mt="-0.5rem">{errors.message.message}</Text>
            </Box>
          )}
        </VStack>
        <Box m="auto" w={["full"]} my="3rem">
          <Input type="submit" w="full" variant="inputButton" />
        </Box>
      </FormControl>
    </form>
  );
};

export default ContactForm;
