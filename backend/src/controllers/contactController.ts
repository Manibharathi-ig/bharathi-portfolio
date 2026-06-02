import { Request, Response } from "express";
import prisma from "../prisma/prisma";
import { contactSchema } from "../validators/contactValidator";
import bcrypt from "bcrypt";
import transporter from "../config/mail";

export const createContact = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      name,
      email,
      opportunityType,
      projectType,
      message,
    } = req.body;
    const validation = contactSchema.safeParse(req.body);

if (!validation.success) {
  return res.status(400).json({
    success: false,
    errors: validation.error.flatten().fieldErrors,
  });
}

    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        opportunityType,
        projectType,
        message,
      },
    });

    console.log("Before mail");

    await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,

  subject: `New Portfolio Contact - ${name}`,

  html: `
    <h2>New Contact Received</h2>

    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Opportunity:</strong> ${opportunityType}</p>
    <p><strong>Project:</strong> ${projectType}</p>
    <p><strong>Message:</strong> ${message}</p>
  `,
});

console.log("After mail");

    res.status(201).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getContacts = async (
  req: Request,
  res: Response
) => {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch contacts",
    });
  }
};


export const getContactById = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    const contact = await prisma.contact.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const deleteContact = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    await prisma.contact.delete({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Delete failed",
    });
  }
};


export const updateContactStatus = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const contact = await prisma.contact.update({
      where: {
        id: Number(id),
      },
      data: {
        status,
      },
    });

    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to update status",
    });
  }
};

export const loginAdmin = async (
  req: Request,
  res: Response
) => {
  try {
    const { email, password } = req.body;

    const admin = await prisma.admin.findUnique({
      where: {
        email,
      },
    });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      admin.password
    );

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};