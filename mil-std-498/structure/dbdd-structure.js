const DBDD_STRUCTURE = [
    {
        "object": "package",
        "name": "Database Design Description",
        "contents": [
            {
                "object": "package",
                "name": "Front Matter",
                "contents": [
                    {
                        "object": "package",
                        "name": "Cover",
                        "instructions": [
                            "The document shall include a title page containing, as applicable: document number; volume number; version/revision indicator; security markings or other restrictions on the handling of the document; date; document title; name, abbreviation, and any other identifier for the system, subsystem, or item to which the document applies; contract number; CDRL item number; organization for which the document has been prepared; name and address of the preparing organization; and distribution statement."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "Revision Summary"
                    },
                    {
                        "object": "package",
                        "name": "Table of Contents",
                        "instructions":[
                            "The document shall contain a table of contents providing the number, title, and page number of each titled paragraph, figure, table, and appendix."
                        ]
                    }
                ]
            },
            {
                "object": "package",
                "name": "Scope",
                "instructions": [
                    "This section shall be divided into the following paragraphs:"
                ],
                "text": [
                    "The DBDD describes the design of a database, that is, a collection of related data stored in one or more computerized files in a manner that can be accessed by users or computer programs via a DBMS. It can also describe the software units used to access or manipulate the data and traces the design to system/subsystem or software requirements.",
                    "This section identifies the systems, subsystems, HWCIs, CSCIs, manual operations or other system components that this specification applies to, describes these entities and provides an overview of the document."
                ],
                "contents":[
                    {
                        "object": "package",
                        "name": "Identification",
                        "instructions": [
                            "This paragraph shall contain a full identification of the system/subsystem or software to which this document applies, including, as applicable, identification number(s), title(s), abbreviation(s), version number(s), and release number(s)."
                        ],
                        "text": [
                            "This design description applies to the XXXXXXXXXX."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "Database Overview",
                        "instructions": [
                            "This paragraph shall briefly state the purpose of the database to which this document applies. It shall describe the general nature of the database; summarize the history of its development, use, and maintenance; identify the project sponsor, acquirer, user, developer, and support agencies; identify current and planned operating sites; and list other relevant documents."
                        ],
                        "text": [
                            "The XXXXXXXXX is..."
                        ]
                    },
                    {
                        "object": "package",
                        "name": "Document Overview",
                        "instructions": [
                            "This paragraph shall summarize the purpose and contents of this document and shall describe any security or privacy considerations associated with its use."
                        ],
                        "text": [
                            "The structure of this document is based on DID DI-IPSC-81437A, \"Database Design Description\", dated December 15, 1999. The document structure may deviate from the DID to facilitate publishing the document from the contents of a UML/SysML database.",
                            "This document is organized as follows:",
                            "Section 1. Scope: Identifies the scope of this document.",
                            "Section 2. Referenced Documents: Identifies all documents that are referenced in this document.",
                            "Section 3. Database-Wide Design Decisions: XXXXXXXXXXXXXXXXXXXXXXX.",
                            "Section 4. Detailed Database Design: XXXXXXXXXXXXXXXXXXXXXXX.",
                            "Section 5. Detailed Database Software Design: XXXXXXXXXXXXXXXXXXXXXXX.",
                            "Section 6. Requirements Traceability: XXXXXXXXXXXXXXXXXX.",
                            "Section 5. Notes: Contains a listing of acronyms and terms used in this document and their definition."
                        ]
                    }
                ]
            },
            {
                "object": "package",
                "name": "Referenced Documents",
                "instructions":[
                    "This section shall list the number, title, revision, and date of all documents referenced in this document. This section shall also identify the source for all documents not available through normal Government stocking activities."
                ],
                "text": [
                    "This section lists all documents referenced in this document."
                ]
            },
            {
                "object":"package",
                "name": "Database-Wide Design Decisions",
                "instructions":[
                    "This section shall be divided into paragraphs as needed to present database-wide design decisions, that is, decisions about the databases behavioral design (how it will behave, from a user’s point of view, in meeting its requirements, ignoring internal implementation) and other decisions affecting further design of the database. If all such decisions are explicit in the system or CSCI requirements,this section shall so state. Design decisions that respond to requirements designated critical, such as those for safety, security or privacy, shall be placed in separate subparagraphs. If a design decision depends upon system states or modes, this dependency shall be indicated. If some or all of the design decisions are described in the documentation of a custom or commercial database management system (DBMS), they maybe referenced from this section. Design conventions needed to understand the design shall be presented or referenced. Examples of database-wide design decisions are the following:",

                    "\ta. Design decisions regarding queries or other inputs the database will accept and outputs(displays, reports, messages, responses,etc.) it will produce, including interfaces with other systems, HWCIs, CSCIs, and users (5.x.d of this DID identifies topics to be considered in this description). If part or all of this information is given in Interface Design Descriptions (IDDs), they may be referenced.",

                    "\tb. Design decisions on database behavior in response to each input or query, including actions, response times and other performance characteristics, selected equations/algorithms/rules, disposition, and handling of unallowed inputs.",

                    "\tc. Design decisions on how databases/date files will appear to the user (4.x of this DID identifies topics to be considered in this description).",
                    
                    "\td. Design decisions on the database management system to be used (including name, version/release) and the type of flexibility to be built into the database for adapting to changing requirements.",

                    "\te. Design decisions on the levels and types of availability, security, privacy, and continuity of operations to be offered by the database.",

                    "\tf. Design decisions on database distribution (such as client/server), master database file updates and maintenance, including maintaining consistency, establishing/reestablishing and maintaining synchronization, enforcing integrity and business rules.",

                    "\tg. Design decisions on backup and restoration including data and process distribution strategies, permissible actions during backup and restoration, and special considerations for new or non-standard technologies such as video and sound.",

                    "\th. Design decisions on repacking, sorting, indexing, synchronization, and consistency including automated disk management and space reclamation considerations, optimizing strategies and considerations, storage and size considerations, and population of the database and capture of legacy data."
                ]
            },
            {
                "object": "package",
                "name": "Detailed Database Design",
                "instructions":[
                    "This section shall be divided into paragraphs as needed to describe the detailed design of the database. The number of levels of design and the names of those levels shall be based on the design methodology used. Examples of database design levels include conceptual,internal, logical, and physical. If part or all of the design depends upon system states or modes, this dependency shall be indicated. Design conventions needed to understand the design shall be presented or referenced.",

                    "\tNote: This DID uses the term \"data element assembly\" to mean any entity, relation, schema, field, table, array, etc., that has structure (number/order/grouping of data elements) at a given design level (e.g., conceptual, interval, logical, physical) and the term \"data element\" to mean any relation,attribute, field, cell, data element, etc. that does not have structure at that level.",

                    "Each paragraph shall identify a database design level and shall describe the data elements and data element assemblies of the database in the terminology of the selected design method. The information shall include the following, as applicable, presented in any order suited to the information to be provided:",

                    "\ta. Characteristics of individual data elements in the database design, such as:",

                    "\t\t1) Names/identifiers:",

                    "\t\t\ta) Project-unique identifier.",

                    "\t\t\tb) Non-technical (natural-language) name.",
                    
                    "\t\t\tc) DoD standard data element name.",
                    
                    "\t\t\td) Technical name(e.g., field name in the database).",
                    
                    "\t\t\te) Abbreviation or synonymous names.",
                    
                    "\t\t2) Data type (alphanumeric, integer, etc.).",

                    "\t\t3) Size and format (such as length and punctuation of a character string).",

                    "\t\t4) Units of measurement(such as meters, dollars, nanoseconds).",

                    "\t\t5) Range or enumeration of possible values (such as 0-99).",

                    "\t\t6) Accuracy (how correct) and precision (number of significant digits).",

                    "\t\t7) Priority, timing, frequency, volume, sequencing, and other constraints, such as whether the data element may be updated and whether business rules apply.",

                    "\t\t8) Security and privacy constraints.",

                    "\t\t9) Sources(setting/sending entities) and recipients (using/receiving entities).",

                    "\tb. Characteristics of data element assemblies (records, messages, files, arrays, displays, reports, etc.) in the database design, such as:",

                    "\t\t1) Names/identifiers:",

                    "\t\t\ta) Project-unique identifier.",

                    "\t\t\tb) Non-technical (natural language) name.",

                    "\t\t\tc) Technical name(e.g., record or data structure name in code or database).",

                    "\t\t\td) Abbreviations or synonymous names.",

                    "\t\t2) Data elements in the assembly and their structure (number, order, grouping).",

                    "\t\t3) Medium (such as disk) and structure of data elements/assemblies on the medium.",

                    "\t\t4) Visual and auditory characteristics of displays and other outputs (such as colors, layouts, fonts, icons and other display elements, beeps,lights).",

                    "\t\t5) Relationships among assemblies, such as sorting/access characteristics.",
                    
                    "\t\t6) Priority, timing, frequency, volume, sequencing, and other constraints, such as whether the assembly may be updated and whether business rules apply.",

                    "\t\t7) Security and privacy constraints.",

                    "\t\t8) Sources(setting/sending entities) and recipients (using/receiving entities)."
                ]
            },
            {
                "object": "package",
                "name": "Detailed Database Software Design",
                "instructions":[
                    "This section shall be divided into the following paragraphs to describe each software unit used for database access or manipulation. If part or all of this information is provided elsewhere, such as in a SDD, the SDD for a customized DBMS,or the user manual of a commercial DBMS,that information maybe referenced rather than repeated here. If part or all of the design depends upon system states or modes, this dependency shall be indicated. If design information falls into more than one paragraph, it may be presented once and referenced  from the other paragraphs. Design conventions needed to understand the design shall be presented or referenced.",

                    "Each paragraph shall identify a software unit by project-unique identifier and shall describe the unit. The description shall include the following information, as applicable. Alternatively, this paragraph designates a group of software units and identifies and describes the software units in subparagraphs. Software units that contain other software units may reference the descriptions of those units rather than repeating information.",

                    "\ta. Unit design decisions, if any, such as algorithms to be used,if not previously selected",

                    "\tb. Any constraints, limitations, or unusual features in the design of the software unit",

                    "\tc. The programming language to be used and rationale for its use if other than the specified CSCI language",

                    "\td. If the software unit consists of or contains procedural commands(such as menu selections in a database management system (DBMS)for defining forms and reports, on-line DBMS queries for database access and manipulation, input to a graphical user interface (GUI) builder for automated code generation, commands to the operating system,or shell scripts), a list of the procedural commands and a reference to user manuals or other documents that explain them.",

                    "\te. If the software unit contains, receives, or outputs data, a description of its inputs, outputs, and other data elements and data element assemblies, as applicable. Data local to the software unit shall be described separately from data input to or output from the software unit. Interface characteristics may be provided here or by referencing Interface Design Description(s). If a given interfacing entity is not covered by this DBDD (for example, an external system) but is interface characteristics need to be mentioned to describe software units that are, these characteristics shall be stated as assumptions or as \"When [the entity not covered] does this, [the software unit] will...\". This paragraph may reference other documents (such as data dictionaries, standards for protocols, and standards for user interfaces) in place of stating the information here. The design description shall include the following, as applicable, presented in any order suited to the information to be provided, and shall note any differences in these characteristics from the point of view of the interfacing entities (such as different expectations about the size, frequency, or other characteristics of data elements):",

                    "\t\t1) Project-unique identifier for the interface.",

                    "\t\t2) Identification of the interfacing entities (software units, configuration items, users, etc.) by name, number, version, and documentation references, as applicable.",

                    "\t\t3) Priority assigned to the interface by the interfacing entity(ies).",

                    "\t\t4) Typeof interface (such as real-time data transfer, storage-and-retrieval of data, etc.) to be implemented.",

                    "\t\t5) Characteristics of individual data elements that the interfacing entity(ies) will provide, store, send, access, receive, etc. Paragraph 4.x.a of this DID identifies topics to be covered in this description.",

                    "\t\t6) Characteristics of data element assemblies (records, messages, files, arrays, displays, reports, etc.) that the interfacing entity(ies) will provide, store, send, access, receive, etc. Paragraph 4.x.b of this DID identifies topics to be covered in this description.",

                    "\t\t7) Characteristics of communication methods that the interfacing entity(ies) will use for the interface, such as:",
                    
                    "\t\t\ta) Project-unique identifier(s).",

                    "\t\t\tb) Communication links/bands/frequencies/media and their characteristics.",

                    "\t\t\tc) Message formatting.",

                    "\t\t\td) Flow control (such as sequence numbering and buffer allocation).",

                    "\t\t\te) Data transfer rate, whether periodic/aperiodic, and interval between transfers.",

                    "\t\t\tf) Routing, addressing, and naming conventions.",

                    "\t\t\tg) Transmission services, including priority and grade.",

                    "\t\t\th) Safety/security/privacy considerations, such as encryption, user authentication, compartmentalization, and auditing.",

                    "\t\t8) Characteristics of protocols that the interfacing entity(ies) will use for the interface, such as:",

                    "\t\t\ta) Project-unique identifier(s).",

                    "\t\t\tb) Priority/layer of the protocol.",

                    "\t\t\tc) Packeting, including fragmentation and reassembly, routing, and addressing.",

                    "\t\t\td) Legality checks, error control, and recovery procedures.",

                    "\t\t\te) Synchronization, including connection establishment, maintenance, termination.",

                    "\t\t\tf) Status, identification, and any other reporting features.",

                    "\t\t9) Other characteristics, such as physical compatibility of the interfacing entity(ies) (dimensions,tolerances, lads, voltages, plug compatibility, etc.).",

                    "\tf. If the software unit contains logic, the logic to be used by the software unit, including, as applicable:",

                    "\t\t1) Conditions in effect within the software unit when its execution is initiated.",

                    "\t\t2) Conditions under which control is passed to other software units.",

                    "\t\t3) Response and response time to each input, including data conversion, renaming, and data transfer operations.",

                    "\t\t4) Sequence of operations and dynamically controlled sequencing during the software unit's operation, including:",

                    "\t\t\ta) The method for sequence control.",

                    "\t\t\tb) The logic and input conditions of that method, such as timing variations, priority assignments.",

                    "\t\t\tc) Data transfer in and out of memory.",
                    
                    "\t\t\td) The sensing of discrete input signals, and timing relationships between interrupt operations within the software unit.",
                    
                    "\t\t5) Exception and error handling."
                ]
            },
            {
                "object": "package",
                "name": "Requirements Traceability",
                "instructions":[
                    "This section shall contain:",
                    "\ta. Traceability from each database or other software unit covered by this DBDD to the system or CSCI requirements it addresses",
                    "\tb. Traceability from each system or CSCI requirement that has been allocated to a database or other software unit covered in this DBDD to the database or software units that address it."
                ]
            },
            {
                "object": "package",
                "name": "Notes",
                "instructions":[
                    "This section shall contain any general information that aids in understanding this document (e.g., background information, glossary, rationale). This section shall include an alphabetical listing of all acronyms, abbreviations, and their meanings as used in this document and a list of any terms and definitions needed to understand this document."
                ]
            },
            {
                "object":"package",
                "name": "Appendices",
                "instructions":[
                    "Appendices may be used to provide information published separately for convenience in document maintenance (e.g., charts classified data). As applicable, each appendix shall be referenced in the main body of the document where the data would normally have been provided. Appendixes may be bound as separate documents for ease in handling. Appendixes shall be lettered alphabetically (A, B, etc.)."
                ]
            }
        ]
    }
];
